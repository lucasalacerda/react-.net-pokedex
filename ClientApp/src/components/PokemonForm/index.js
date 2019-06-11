import React from 'react';

const PokemonForm = ({ getPokemon }) => (
   <form onSubmit={getPokemon}>
        <input type="text" name="pokemonName" placeholder="Insert pokemon's name"/>
        <button>Let's search</button>
   </form>

);

export default PokemonForm;