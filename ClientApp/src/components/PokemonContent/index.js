import React from 'react';

const PokemonContent = ({ pokemonName, pokemonPower, pokemonImg }) => (
    <div>
        <ul>
            { pokemonName && <li><p> Name: {pokemonName} </p></li> }
            { pokemonPower && <li><p> Power: {pokemonPower} </p></li> }
            { pokemonImg && <li><img src={pokemonImg} alt="pokemon" id="avatar" /></li> }
        </ul>
    </div>
);

export default PokemonContent;