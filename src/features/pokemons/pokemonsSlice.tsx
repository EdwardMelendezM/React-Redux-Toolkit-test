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
    increment: (state,/* action */) => {
      state.page += 1
    },
  }
})

export const { increment } = pokemonSlice.actions

export default pokemonSlice.reducer