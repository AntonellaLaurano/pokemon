import { types } from '../types';

const initialState = {
    access: "",
    details: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {};

        default:
            return state;
    }
}