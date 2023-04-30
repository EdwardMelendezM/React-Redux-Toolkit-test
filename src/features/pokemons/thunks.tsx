import { pokemonApi } from "../../api/pokemonApi"
import { RootState } from "../../app/store"
import { setPokemons, startLoadingPokemons } from "./pokemonsSlice"

export const getPokemons = (page = 0) => {
  return async (dispatch: any, getState: () => RootState) => {
    dispatch(startLoadingPokemons())

    //TODO Realizar peticion fetch
    // const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=5&offset=${page * 10}`)
    // const data = await res.json();

    const { data } = await pokemonApi.get(`/pokemon?limit=5&offset=${page * 10}`)


    dispatch(setPokemons({
      pokemons: data.results || [],
      page: page + 1
    }))

  }
}