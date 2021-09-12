import { API_URL } from '../../api/api';

export const getPokemon = async (key) => {
    try {
        const url = API_URL + `pokemon/${key}/`;
        const response = await fetch(url,{
            method: 'GET'
        });
        if(response.ok) {
            const pokemon = await response.json();
            return pokemon;
        } else if(response.status === 404) {
            return '404';
        }
    } catch (error) {
        console.log(error.message);
    }
    
}


