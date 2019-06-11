import React, { Component } from 'react';
import PokemonForm from '../../components/PokemonForm';
import PokemonContent from '../../components/PokemonContent';

export default class PokemonProfile extends Component {
    static displayName = PokemonProfile.name;

    constructor (props) {
        super(props);
        this.state = { 
            pokemonName: '',
            pokemonPower: '',
            pokemonImg: ''
        };
      }

    getPokemon = async(e) => {
        const pokemonName = e.target.elements.pokemonName.value;
        e.preventDefault();
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`, {
            method: 'GET',
            mode: 'cors'
        });
        const json = await data.json();
        this.setState({
            pokemonName: json.name,
            pokemonPower: json.stats[0].base_stat,
            pokemonImg: json.sprites.front_default
        });
        console.log(this.state.pokemonImg)
    }
    
    render() {
        return (
            <div>
                <h1>Pokemon's Attribute</h1>
                <p>text, text, and more text...</p>
                <PokemonForm getPokemon={this.getPokemon}/>
                <PokemonContent {...this.state}/>
            </div>
        )
    } 
} 
