import {types} from "./types";
import {getPokemonDetail} from "../../api";

export const setPokemons = (payload) => ({
    type: types.SET_POKEMONS,
    payload
})

export const getPokemonsWithDetails =
    (pokemons = []) =>
        async (dispatch) => {
            const pokemosDetail = await Promise.all(pokemons.map( pokemon => getPokemonDetail(pokemon))
            );
            dispatch(setPokemons(pokemosDetail));
}

export const setLoading = (payload) => ({
    type: types.SET_LOADING,
    payload
})

export const setFavorites = (payload) => ({
    type: types.SET_FAVORITES,
    payload
})