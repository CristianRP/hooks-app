import { Pokemon } from './MultipleCustomHooks'

export const PokemonCard = ({ id, name, weight, abilities, sprites }: Pokemon) => {

  const spritesArray = [
    sprites.front_default,
    sprites.front_shiny,
    sprites.back_default,
    sprites.back_shiny,
  ]

  return (
    <section className="h-200">
      <h2 className="uppercase">#{ id } - { name }</h2>

      <div className='flex'>
        {
          spritesArray.map( sprite => (
            <img key={ sprite.toString() } src={ sprite.toString() } alt={ name } />
          ))
        }
      </div>
      <p>Weight: { weight }</p>
      <div>
        <p className='font-bold text-xl'>Habilities</p>
        <ul className='list-inside list-decimal'>
          {
            abilities.map( ({ ability }) => {
              console.log(ability)
              console.log(ability.name)
              return (  
                <li key={ ability.name }>{ ability.name }</li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}
