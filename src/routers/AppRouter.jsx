import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import PublicRouter from './PublicRouter';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import Home from '../views/Home/Home';
import YourPokemon from '../views/YourPokemon/YourPokemon';
import PokemonDetails from '../views/PokemonDetails/PokemonDetails'
import { getAllPokemon } from '../redux/actions/pokemon';

const AppRouter = () => {
    const dispatch = useDispatch();
    const log = useSelector(state => state.auth.log);

    useEffect(() => {
        if(log) {
            dispatch(getAllPokemon(898));
        }
    }, [log, dispatch])

    return (
        <Router>
            <Switch>
                <PublicRouter exact path='/' log={log} component={AuthRouter} />
                <PrivateRouter exact path='/home' log={log} component={Home} />
                <PrivateRouter exact path='/yourpokemon' log={log} component={YourPokemon} />
                <PrivateRouter exact path='/pokemondetails/:id' log={log} component={PokemonDetails} />
            </Switch>
        </Router>
    )
}

export default AppRouter
