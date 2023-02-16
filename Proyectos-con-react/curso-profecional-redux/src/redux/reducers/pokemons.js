import {types} from "../actions/types";
import {fromJS} from "immutable";

const initialState = fromJS({
    pokemons: [],
    loading: false
})

const pokemonsReducers = (state=initialState, action) => {
    switch (action.type) {
        case types.SET_POKEMONS:
            // return {
            //     ...state,
            //     pokemons: action.payload
            // }
            return state.setIn(['pokemons'], fromJS(action.payload))
        case types.SET_LOADING:
            // return {
            //     ...state,
            //     loading: action.payload
            // }
            return state.setIn(['loading'], action.payload)
        case types.SET_FAVORITES:
            // const newPokemonsList = [...state.pokemons];

            // const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
            //     return pokemon.id === action.payload.pokemonId;
            // });
            const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) => {
                return pokemon.get('id') === action.payload.pokemonId;
            });

            if (currentPokemonIndex < 0) {
                return state;
            }

            // newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;

            const isFavorite = state.get('pokemons').get(currentPokemonIndex).get('favorite')

            // const isFavo = state.getIn(['pokemons', currentPokemonIndex, 'favorite']);

            // return { ...state, pokemons: newPokemonsList }
            return state.setIn(['pokemons', currentPokemonIndex , 'favorite'], !isFavorite )
        default:
            return state
    }
}

export {pokemonsReducers}