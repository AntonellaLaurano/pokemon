import { types } from '../types';

const initialState = {
    allPokemon: [],
    pokemons: []
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.allPokemon:
            return {
                ...state,
                allPokemon: action.payload
            }

        case types.cleanPokemon:
            return {
                ...state,
                allPokemon: action.payload
            }

        case types.pokemonList:
            return {
                ...state,
                pokemons: [...state.pokemons, action.payload]
            }
        
        case types.deletePokemon:
            return {
                ...state,
                pokemons: state.pokemons.filter(pokemon => {
                    return pokemon.id !== action.payload
                })
            }
        
        default:
            return state;
    }
}