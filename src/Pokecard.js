import React from "react";
import "./Pokecard.css"

const Pokecard = (props) => {

    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`

    return (
        <div className="pokecard">
            <h1 className="pokecard-title">{props.pokemon.name}</h1>
            <img src={pokemonImageUrl} alt="Pokemon image" className="pokecard-image"/>
            <h3>Type: {props.pokemon.type} <br/>EXP: {props.pokemon.base_experience}</h3>
        </div>
    )
}

export default Pokecard;