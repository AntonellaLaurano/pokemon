import { API_URL } from "../api/api";

export const getPokemon = async (key) => {
    try {
        const url = API_URL + `pokemon/${key}/`;
        const response = await fetch(url,{
            method: 'GET'
        });
        const pokemon = await response.json(response);
        return pokemon;
    } catch (error) {
        console.log(error);
    }
    
}


