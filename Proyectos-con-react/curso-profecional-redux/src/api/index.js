import axios from 'axios';

const getPokemons = () => {
    return axios('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(res => res.data.results)
        .catch(err => console.log(err))
}
const getPokemonDetail = (pokemon) => {
    return axios(pokemon.url)
        .then(res => res.data)
        .catch(err => console.log(err))
}
export {getPokemons, getPokemonDetail}