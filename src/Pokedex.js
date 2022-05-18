import Pokecard from './PokeCard'
import "./Pokedex.css"

const Pokedex = ({pokemon}) =>{

    return(
        <div className="pokedex-inline">
            {pokemon.map(p=>( <Pokecard key={p.id} id = {p.id}name={p.name} type={p.type} base_experience={p.base_experience}/>))}
            
        </div>
        
    )
}

export default Pokedex