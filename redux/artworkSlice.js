import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArtworks = createAsyncThunk(
  "artworks/fetchArtworks",
  async () => {
    // just get 6 same ones for now
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?page=1&limit=6&fields=id,title,image_id"
    );
    const raw = await response.json();
    const { data, config } = raw;
    const parsed = data.reduce(
      (callback, artwork) => ({
        ...callback,
        [artwork.id]: {
          ...artwork,
          id: String(artwork.id),
          image: `${config.iiif_url}/${artwork.image_id}/full/843,/0/default.jpg`,
        },
      }),
      {}
    );
    return parsed;
  }
);

export const fetchArtwork = createAsyncThunk(
  "artworks/fetchArtwork",
  async (id) => {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,image_id`
    );
    const raw = await response.json();
    const { data, config } = raw;
    return {
      [data.id]: {
        ...data,
        id: String(data.id),
        image: `${config.iiif_url}/${data.image_id}/full/843,/0/default.jpg`,
      },
    };
  }
);

const artworksSlice = createSlice({
  name: "artworks",
  initialState: {
    items: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArtwork.fulfilled, (state, action) => {
        state.items = { ...state.items, ...action.payload };
      })
      .addCase(fetchArtworks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArtworks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchArtworks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default artworksSlice.reducer;
