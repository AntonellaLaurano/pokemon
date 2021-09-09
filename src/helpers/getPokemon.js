import { API_URL } from "../api/api";

export const getPokemon = async (key) => {
    try {
        const url = API_URL + `pokemon/${key}/`;
        const response = await fetch(url,{
            method: 'GET'
        });
        console.log(response);
        const pokemon = await response.json(response);
        console.log(pokemon);
        return pokemon;
    } catch (error) {
        console.log(error);
    }
    
}


