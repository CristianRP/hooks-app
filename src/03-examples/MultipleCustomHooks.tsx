import { DataType, useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

type Ability = {
  ability: {
    name: string;
  }
}

export type Pokemon = {
  id: number;
  name: string;
  weight: number;
  abilities: Ability[];
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  }
}

export const MultipleCustomHooks = () => {

  const { counter, increment, decrement } = useCounter(1);
  const { isLoading, hasError, data } = useFetch<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  const transformDataToPokemonType = (data: DataType<Pokemon>): Pokemon => {
    const abilities = data.abilities.map((ability) => {
      const a = ability as Ability;
      return {
        ability: {
          name: a.ability.name
        }
      }
    })

    console.log('patos', abilities);
    
    
    return {
      id: data.id,
      name: data.name,
      weight: data.weight,
      abilities,
      sprites: data.sprites
    };
  };

  return (
    <div>
      <h1>Info about Pokémon</h1>
      <hr />

      { isLoading && !hasError && <LoadingMessage /> }

      {
        !isLoading && !hasError &&
        <PokemonCard {...transformDataToPokemonType(data)} />
      }

      { hasError && <p>Error</p> }

      <button className='p-2 m-2 bg-blue-600 rounded-md text-white hover:bg-blue-500 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300'
        onClick={ () => counter > 1 ? decrement() : null }
        >
        Previous
      </button>

      <button className='p-2 m-2 bg-blue-600 rounded-md text-white hover:bg-blue-500 active:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300'
        onClick={ () => increment(1) }
        >
        Next
      </button>
    </div>
  )
}
