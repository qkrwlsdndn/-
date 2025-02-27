import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemontSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemontSlice.reducer,
    favorite: favoriteSlice.reducer
  }
})