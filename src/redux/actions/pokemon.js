import { API_URL } from "../../api/api";
import { types } from "../types";

export const getAllPokemon = (limit) => {
    const url = API_URL + `pokemon?limit=${limit}&offset=0`;
    return async (dispatch) => {
        const response = await fetch(url, {
            method: 'GET'
        });
        const data = await response.json();
        const dataP = [];
        data.results.map((element) => {
            dataP.push({
                name: element.name,
            });
        });
        console.log(dataP)
        return dispatch(allPokemon(dataP));
    }
}

export const allPokemon = (allPokemon) => {
    return {
        type: types.allPokemon,
        payload: allPokemon
    }
}

export const pokemonDetails = (pokemon) => {
    return {
        type: types.details,
        payload: pokemon
    }
}

export const cleanPokemon = () => {
    return {
        type: types.cleanPokemon,
        payload: {}
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