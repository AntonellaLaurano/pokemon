import { types } from "../types";

export const pokemonDetails = (pokemon) => {
    return {
        type: types.details,
        payload: pokemon
    }
}

export const pokemonList = (addPokemon) => {
    return {
        type: types.pokemonList,
        payload: addPokemon
    }
}

export const deletePokemon = (id) => {
    return {
        type: types.deletePokemon,
        payload: id
    }
}