import { createSlice } from '@reduxjs/toolkit'

export interface pokemonState {
  page: number
  pokemon: Array<any>
  isLoading: boolean
}

const initialState: pokemonState = {
  page: 0,
  pokemon: [],
  isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state,/* action */) => {
      state.isLoading = true
    },
    setPokemons: (state) => {
      state.pokemon = []
    }

  }
})

export const { setPokemons, startLoadingPokemons } = pokemonSlice.actions

export default pokemonSlice.reducer