import React, {useState} from 'react'

const PokemonAPI = () => {
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(response => setPokemons(response.results))
    }

    return (
        <div>
            <button onClick={fetchPokemons}>Fetch Pokemons</button>
            <ol>
                {pokemons.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)}
            </ol>
        </div>
    )
}

export default PokemonAPI
