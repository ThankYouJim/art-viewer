import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchArtworks = createAsyncThunk(
  "artworks/fetchArtworks",
  async () => {
    // just get 6 same ones for now
    const response = await fetch(
      "https://api.artic.edu/api/v1/artworks?page=1&limit=6&field=id,title,artist_display,image_id"
    );
    const data = await response.json();
    return data.data;
  }
);

const artworksSlice = createSlice({
  name: "artworks",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
