import { ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from '../features/counter/counterSlice'
import pokemonReducer from '../features/pokemons/pokemonsSlice'
export interface RootState {
  counter: CounterState,
  pokemons: any
}
export type AppDispatch = ThunkDispatch<RootState, unknown, { type: 'INCREMENT', payload: 1 }>;


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonReducer
  }
})