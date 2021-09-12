import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Center, HStack, Input, Stack, useColorModeValue, Box, Text } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'
import { getPokemon } from '../../helpers/get/getPokemon'
import Pokemon from '../../components/Pokemon'
import { transformUppercase } from '../../helpers/transformUppercase'

const Home = () => {
    const data = useSelector(state => state.pokemons.allPokemon);
    const [pokemonL, setPokemonL] = useState([]);

    const [showPokemon, setShowPokemon] = useState(false);
    const [pokemonName, setPokemonName] = useState({name:''})
    const [pokemon, setPokemon] = useState({});

    const { name } = pokemonName;

    const hanldeChange = (e) => {
        setPokemonName({
            ...pokemonName,
            [e.target.name]: e.target.value
        })
        filtrar(e.target.value);
    }

    const filtrar = (search)=>{
        var searchResult = data.filter((element)=>{
          if(element.name.toString().toLowerCase().includes(search.toLowerCase()) && search !== ''){
            return element;
          }
        });
        setPokemonL(searchResult);
    }

    const handleSelected =(selected) => {
        setPokemonName({
            ...pokemonName,
            name: selected
        })
    }

    const hanldeSearch = async () => {
        setPokemonL([]);
        if (pokemonName.name !== '') {
             try {
                const data = await getPokemon(pokemonName.name);
                if(data !== '404') {
                    setPokemon(data);
                    setShowPokemon(true);
                } else {
                    setShowPokemon(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const hanldeGenerator = async () => {
        setPokemonL([]);
        try {
            const randomNumber = Math.floor(Math.random() * (898 - 1) +1);
            const data = await getPokemon(randomNumber);
            setPokemon(data);
            setShowPokemon(true);
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <>
            <NavBar />
            <Center m={'50px'}>
                <Stack direction={["column", "row"]}>
                    <Box>
                        <Input type={'text'}
                            placeholder={'arcanine'}
                            color={useColorModeValue('gray.800', 'gray.200')}
                            bg={useColorModeValue('gray.100', 'gray.600')}
                            border={0}
                            _focus={{
                                bg: useColorModeValue('gray.200', 'gray.800'),
                                outline: 'none',
                            }}
                            value={name}
                            name='name'
                            onChange={hanldeChange}
                            autoComplete="off"
                            w={'200px'}
                        />
                        {
                            pokemonL.length !== 0 &&
                            <Box position={'absolute'} w={'200px'} p={'20px'} border={'1px solid'} borderColor={'gray.100'} borderRadius={'10px'}>
                                {   
                                    pokemonL.map(element => (
                                        <Text key={element.name} cursor={'pointer'} onClick={() => handleSelected(element.name)}>{transformUppercase(element.name)}</Text>
                                    ))
                                }
                            </Box>
                        }
                    </Box>
                    <HStack>
                        <Button w={'150px'} onClick={hanldeSearch} bg={'blue'} rounded={'full'} color={'white'} _hover={{ bg: 'blue.500' }} _focus={{ bg: 'blue.500' }}>
                        Search
                    </Button>
                    <Button w={'150px'} onClick={hanldeGenerator} bg={'blue'} rounded={'full'} color={'white'}  _hover={{ bg: 'blue.500' }} _focus={{ bg: 'blue.500' }}>Generator</Button>
                    </HStack>
                </Stack>
            </Center>           
            {
                showPokemon && <Pokemon pokemon={pokemon} type={'Add Pokemon'}></Pokemon>
            }
        </>
    )
}

export default Home
