import Pokemon from "./components/pokemons/Pokemon";
import Counter from "./features/counter/Counter";

const App = () => {
  return (
    <div>
      <Pokemon />
      <hr />
      <Counter />
    </div>
  );
}

export default App;