import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "../../features/pokemons/thunks";

const Pokemon = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, []);
  return (
    <div>
      <h1>Pokemon app</h1>
    </div>
  );
}
//https://pokeapi.co/api/v2/pokemon?limit=5&offset=0
export default Pokemon;