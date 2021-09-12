import { API_URL } from '../../api/api';

export const getAllPokemon = async (limit) => {
    try {
        const url = API_URL + `pokemon?limit=${limit}&offset=0`;
        const response = await fetch(url,{
            method: 'GET'
        });
        const allPokemon = await response.json(response);
        console.log(allPokemon)
        return allPokemon.results;
    } catch (error) {
        console.log(error.message);
    }
    
}