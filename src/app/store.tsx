import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from '../features/counter/counterSlice'

export interface RootState {
  counter: CounterState
}

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})