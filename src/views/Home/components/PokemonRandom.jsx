import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { getPokemonRandom } from '../../../redux/actions/pokemon';

import { Box, Button } from '@chakra-ui/react';
import Pokemon from './Pokemon';

const PokemonRandom = () => {
    const dispatch = useDispatch()
    const [showPokemon, setShowPokemon] = useState(false)

    const hanldeGenerator = () => {
        const randomNumber = Math.floor(Math.random() * (152 - 1) +1);
        console.log(randomNumber);
        dispatch(getPokemonRandom(randomNumber));
        setShowPokemon(true);
    }
    return (
        <Box>
            <Button onClick={hanldeGenerator}>Generar</Button>
            {
                showPokemon && <Pokemon />
            }
        </Box>
        
    )
}

export default PokemonRandom
