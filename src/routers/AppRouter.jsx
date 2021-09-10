import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PublicRouter from './PublicRouter';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import Home from '../views/Home/Home';
import YourPokemon from '../views/YourPokemon/YourPokemon';
import PokemonDetails from '../views/PokemonDetails/PokemonDetails'

const AppRouter = () => {
    const log = useSelector(state => state.auth.log);

    return (
        <Router>
            <Switch>
                <PublicRouter exact path='/' log={log} component={AuthRouter} />
                <PrivateRouter exact path='/home' log={log} component={Home} />
                <PrivateRouter exact path='/yourpokemon' log={log} component={YourPokemon} />
                <PrivateRouter exact path='/pokemondetails' log={log} component={PokemonDetails} />
            </Switch>
        </Router>
    )
}

export default AppRouter
