import React from 'react'
import { useSelector } from 'react-redux'
import {  SimpleGrid } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'
import Pokemon from '../../components/Pokemon'

const YourPokemon = () => {

    const team = useSelector(state => state.pokemons.pokemons);

    return (
        <>
            <NavBar />
            {
                team && 
                    <SimpleGrid minChildWidth="300px" spacing="40px">
                        {
                            team.map(element => {
                                return <Pokemon key={element.id} pokemon={element} type={'Delete Pokemon'} />
                            })
                        }
                    </SimpleGrid>
            }
        </>
    )
}

export default YourPokemon
