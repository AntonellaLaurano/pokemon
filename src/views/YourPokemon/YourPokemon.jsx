import React from 'react'
import { useSelector } from 'react-redux'
import {  Box, SimpleGrid } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'
import Pokemon from '../../components/Pokemon'

const YourPokemon = () => {

    const team = useSelector(state => state.pokemons.pokemons);

    return (
        <Box h='100vh' w='100vw' bgGradient='linear(to-r, cyan, blue)'>
            <NavBar />
{
                team && 
                    <SimpleGrid minChildWidth='300px' spacing='40px'>
                        {
                            team.map(element => {
                                return <Pokemon key={element.id} pokemon={element} type={'Delete Pokemon'} />
                            })
                        }
                    </SimpleGrid>
            }
        </Box>
    )
}

export default YourPokemon
