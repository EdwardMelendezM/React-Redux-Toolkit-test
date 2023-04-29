import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from '../features/counter/counterSlice'
import pokemonReducer from '../features/pokemons/pokemonsSlice'
export interface RootState {
  counter: CounterState
}

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer
  }
})