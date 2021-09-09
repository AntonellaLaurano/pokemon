import { API_URL } from "../../api/api";
import { types } from "../types";

export const getPokemonRandom = (id) => {
    const url = API_URL + `pokemon/${id}/`;
    return async (dispatch) => {
        const response = await fetch(url,{
            method: 'GET'
        });
        const pokemon = await response.json(response);
        console.log(pokemon);
        return dispatch(pokemonRandom(pokemon));
    }
}

export const pokemonRandom = (pokemon) => {
    return {
        type: types.random,
        payload: pokemon
    }
}