import storage from 'redux-persist/lib/storage';
import { types } from '../types';

const initialState = {
    log: false,
    user: {}
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                log: true,
                user: action.payload
            };

        case types.logout:
            storage.removeItem('persist:root');
            return state = action.payload;

        default:
            return state;
    }
}