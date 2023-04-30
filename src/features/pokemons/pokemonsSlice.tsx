import { createSlice } from '@reduxjs/toolkit'

export interface pokemonState {
  page: number
  pokemons: Array<any>
  isLoading: boolean
}

const initialState: pokemonState = {
  page: 1,
  pokemons: [],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state,/* action */) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    }

  }
})

export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer