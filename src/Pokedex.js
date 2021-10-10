import React from "react";
import pokemon from "./Pokemon"
import Pokecard from "./Pokecard"
import "./Pokedex.css"

const Pokedex = (props) => {

    console.log(props.pokemon, "this is props inside pokedex")
    return (
        <div>
            <h1 className="pokedex-title">Pokedex</h1>
            <div className="pokedex-pokecard-container">
                {props.pokemon.map(p => (
                 <div>
                    <Pokecard pokemon={p}/>
                 </div>   
                ))}
            </div>
        </div>
    )
}

export default Pokedex;