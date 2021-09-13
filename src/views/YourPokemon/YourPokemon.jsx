import React from 'react'
import { useSelector } from 'react-redux'
import {  Box, Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'
import Pokemon from '../../components/Pokemon'

const YourPokemon = () => {

    const team = useSelector(state => state.pokemons.pokemons);

    return (
        <Box bgGradient='linear(to-r, cyan, blue)' minH='100vh'>
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
                    <Center minH='60vh'>
                        <Flex flexDirection='column' alignItems='center' w={['90%','50%']} textAlign='center' mt='50px' bg='whiteTransparent' color='white' p='25px' borderRadius='20px'>
                            <Text fontSize='3xl'>Add a Pokemon to your team</Text>
                            <Image w='70px' m='10px' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/54.gif' alt='Psyduck'></Image>
                        </Flex>
                    </Center>
            }
        </Box>
    )
}

export default YourPokemon
