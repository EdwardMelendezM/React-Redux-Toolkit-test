import { startLoadingPokemons } from "./pokemonsSlice"

export const getPokemons = async (page = 0) => {
  return async (dispatch: any, getState: any) => {
    dispatch(startLoadingPokemons())
  }
}