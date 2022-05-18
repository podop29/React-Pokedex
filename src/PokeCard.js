import "./PokeCard.css"

const Pokecard = ({id,name,type,base_experience}) =>{
    let imgsrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    return(
    <div className="PokeCard-card">
        <h4>{name}</h4>
        <img className="PokePic" src={imgsrc}/>
        <h5>Type: {type}</h5>
        <h5>Exp: {base_experience}</h5>

    </div>
    )

}

export default Pokecard