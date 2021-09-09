import { types } from '../types';

const initialState = {
    pokemon: {},
    pokemonCharacteristic: {}
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.details:
            return {
                ...state,
                pokemon: action.payload
            };
            
        default:
            return state;
    }
}