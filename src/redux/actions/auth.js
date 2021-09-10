import { types } from "../types";

export const login = (user) => {
    return {
        type: types.login,
        payload: user
    }
}

export const logout = () => {
    return {
        type: types.logout,
        payload: {}
    };
}