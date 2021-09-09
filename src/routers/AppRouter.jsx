import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PokemonDetails from '../views/PokemonDetails.jsx/DetailsPokemon';
import Home from '../views/Home/Home';
import YourPokemon from '../views/YourPokemon.jsx/YourPokemon';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/yourpokemon' component={YourPokemon} />
                <Route exact path='/pokemondetails' component={PokemonDetails} />
            </Switch>
        </Router>
    )
}

export default AppRouter
