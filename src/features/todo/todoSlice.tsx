import { createSlice } from '@reduxjs/toolkit'

export interface todoState {
  count: number
}

const initialState: todoState = {
  count: 0
}

export const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    }
  }
})

export const { increment, decrement } = todoSlice.actions

export default todoSlice.reducer