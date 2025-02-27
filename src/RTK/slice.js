import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemontSlice = createSlice({
  name: 'pokemon',
  initialState: {
    data: [],
    loading: true,
  },
  reducers: {}, // 동기적 상태 변경
  extraReducers: (builder) => {
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => {
      state.loading = false
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload
      })
  }
})

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [1, 2, 3],
  reducers: {
    addToFavorite(state, action) { state.push(action.payload.pokemonId) },
    removeFromFavorite(state, action) { 
      const index = state.indexOf(action.payload.pokemonId)
      if (index !== -1) state.splice(index, 1)
    }
  }
})