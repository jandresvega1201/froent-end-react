import React from 'react';
import PokemonCard from "./PokemonCard";
import '../styles/PokemonList.css';
const PokemonList = ({pokemons}) => {
    return (
        <div className="PokemonList">
            {
                pokemons.map(pokemon => (
                    <PokemonCard
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.front_default}
                        types={pokemon.types}
                        key={pokemon.name}/>
                ))
            }
        </div>
    );
};

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}
export default PokemonList;