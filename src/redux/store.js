import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authReducer } from "./reducers/authReducer";
import { pokemonReducer } from "./reducers/pokemonReducer";

const persistConfig = {
    key: 'root',
    storage,
};

const reducers = persistCombineReducers(persistConfig, {
    auth: authReducer,
    pokemons: pokemonReducer
});

const composeEnhancers = 
(typeof window !== 'undefined' &&
 window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
 compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);