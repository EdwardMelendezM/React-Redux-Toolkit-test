import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../features/pokemons/thunks";
import { RootState } from "../../app/store";

const Pokemon = () => {
  const dispatch = useDispatch()
  const { isLoading, pokemons, page } = useSelector((state: RootState) => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())

  }, []);
  return (
    <div>
      <h1>Pokemon app</h1>
      <span>
        {
          isLoading ? 'true' : 'false'
        }
      </span>
      <ul>
        {pokemons.map((pokemon: any) => <li key={pokemon.name}>{pokemon.name}</li>)}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page + 1))}
      >Next</button>
    </div>
  );
}
//https://pokeapi.co/api/v2/pokemon?limit=5&offset=0
export default Pokemon;