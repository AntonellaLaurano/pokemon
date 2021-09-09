import { types } from '../types';

const initialState = {
    pokemon: ''
}

export const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.random:
            return {
                pokemon: action.payload
            };

        default:
            return state;
    }
}