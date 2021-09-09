import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Center, Flex, Image, Stack, Text } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'

const PokemonDetails = () => {
    const pokemon = useSelector(state => state.pokemons.pokemon)
    console.log(pokemon)
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;


    return (
        <>
            <NavBar />
            <Center w={'90%'} m={'40px'}>
                <Stack direction={["column", "row"]}>
                    <Image boxSize='300px' src={img} alt={pokemon.name} />
                    <Flex flexDirection={'column'} alignItems={'center'}>
                        <Text fontSize={'4xl'}>{pokemon.name}</Text>
                        <Flex justifyContent={'space-between'} bg={'blue'} color={'white'} p={'40px'} borderRadius={'20px'}>
                            <Box>
                                <Text fontSize={'2xl'}>Weight: {pokemon.weight} hg</Text>
                                <Text fontSize={'2xl'}>Height: {pokemon.height} dm</Text>
                            </Box>
                            <Box>
                                <Text fontSize={'2xl'}>Weight: {pokemon.weight} hg</Text>
                                <Text fontSize={'2xl'}>Height: {pokemon.height} dm</Text>
                            </Box>
                        </Flex>
                    </Flex>
                   
                </Stack>
            </Center>
        </>
    )
}

export default PokemonDetails
