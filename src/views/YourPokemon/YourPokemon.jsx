import React from 'react'
import { useSelector } from 'react-redux'
import {  Box, Center, SimpleGrid, Text } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'
import Pokemon from '../../components/Pokemon'

const YourPokemon = () => {

    const team = useSelector(state => state.pokemons.pokemons);

    return (
        <Box h='100vh' w='100vw' bgGradient='linear(to-r, cyan, blue)'>
            <NavBar />
            {
                team.length !== 0 ?
                <Center>
                    <SimpleGrid minChildWidth='300px' spacing='40px' w={['100%', '90%', '70%', '60%']}>
                        {
                            team.map(element => {
                                return <Pokemon key={element.id} pokemon={element} type={'Delete Pokemon'} />
                            })
                        }
                    </SimpleGrid>
                </Center>
                    
                :
                    <Center h='50%'>
                        <Text fontSize='3xl' w='70%' textAlign='center' mt='50px' bg='white' color='blue' p='25px' borderRadius='20px'>Add a Pokemon to your team</Text>
                    </Center>
            }
        </Box>
    )
}

export default YourPokemon
