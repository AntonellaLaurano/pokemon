import { API_URL } from "../../api/api";
import { types } from "../types";

export const pokemonDetails = (pokemon) => {
    return {
        type: types.details,
        payload: pokemon
    }
}