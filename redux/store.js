import { configureStore } from "@reduxjs/toolkit";
import artworksReducer from "./artworkSlice";

const store = configureStore({
  reducer: {
    artworks: artworksReducer,
  },
});

export default store;
