import React, { useEffect, useState  } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Box, Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'
import Stats from '../../components/Stats'
import { transformUppercase } from '../../helpers/transformUppercase'
import { getPokemon } from '../../helpers/get/getPokemon'

const PokemonDetails = () => {
    const { id } = useParams();
    let history = useHistory();

    const [pokemon, setPokemon] = useState({});
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        const pokemonDetails = async () => {
            const data = await getPokemon(id)
            if(data !== '404') {
                 setPokemon(data);
                if(pokemon) {
                    setFlag(true);
                } else {
                    setFlag(false);
                }
            } else {
                history.push('/home')
            }
        }
        pokemonDetails();
        // eslint-disable-next-line
    }, [])


    return (
        <Box bgGradient='linear(to-r, cyan, blue)' minH='100vh'>
            <NavBar />
            {
                flag &&
                <Center>
                    <Flex flexDirection='column'  m='40px' bg='whiteTransparent' p='40px' borderRadius='15px' w={['100%', '70%']}>
                        <Flex flexDirection={['column', 'column', 'column', 'row']} justifyContent='space-around' alignItems='center'  w='100%'>
                            <Image boxSize='300px' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={pokemon.name} />
                            <Flex flexDirection='column' alignItems='center' w={['100%', '70%', '40%']}>
                                <Text fontSize='4xl' color='white'>{transformUppercase(pokemon.name)}</Text>
                                <Flex flexDirection='column'  justifyContent='space-between' alignItems='center' w='100%' shadow='2xl' p='20px' borderRadius='10px' bg='white'>
                                    <Text m='20px' fontSize='lg'>Weight: {(pokemon.weight)} hg</Text>
                                    <Text m='20px' fontSize='lg'>Height: {pokemon.height} dm</Text>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex flexDirection={['column', 'row']} justifyContent='space-around' alignItems='center' mt='40px' mb='50px'>
                            <Box>
                                <Text mb='5px' fontSize='3xl' color='white'>Type</Text>
                                <Flex flexDirection='row'>
                                    {
                                        pokemon.types.map((type) => (
                                            <Box key={type.type.name} w='100px' h='30px' p='5px' bg='yellow' borderRadius='10px' m='5px' color='blue'>
                                                <Center>
                                                    {transformUppercase(type.type.name)}
                                                </Center>
                                            </Box>
                                        ))
                                    }
                                </Flex>
                            </Box>
                            <Box>
                                <Text mb='5px' fontSize='3xl' color='white'>Abilities</Text>
                                <Flex flexDirection={'row'}>
                                    {
                                        pokemon.abilities.map((ability) => (
                                            <Box key={ability.ability.name} w='120px' h='30px' p='5px' bg='yellow' borderRadius='10px' m='5px' color='blue'>
                                                <Center>
                                                    {transformUppercase(ability.ability.name)}
                                                </Center>
                                            </Box>
                                        ))
                                    }
                                </Flex>
                            </Box>
                        </Flex>
                        <Center>
                            <SimpleGrid minChildWidth='120px' spacing='40px' w={['100%', ' 70%', '60%', '80%', '40%']}>
                                {
                                    pokemon.stats.map((stat) => (
                                        <Stats key={stat.stat.name} title={transformUppercase(stat.stat.name)} stat={stat.base_stat}/>
                                    ))
                                }
                            </SimpleGrid>
                        </Center>
                    </Flex>
                </Center>
            }
        </Box>
    )
}

export default PokemonDetails
