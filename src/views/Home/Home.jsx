import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Center, Input, Stack, useColorModeValue, Box, Text, HStack, useOutsideClick, VStack } from '@chakra-ui/react'

import NavBar from '../../components/Navbar'
import { getPokemon } from '../../helpers/get/getPokemon'
import Pokemon from '../../components/Pokemon'
import { transformUppercase } from '../../helpers/transformUppercase'

const Home = () => {
    const data = useSelector(state => state.pokemons.allPokemon);

    const [pokemonL, setPokemonL] = useState([]);
    const [flag, setFlag] = useState(false);
    const autocomplete= useRef();

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

    const filtrar = (search) => {
        var cont = 0;
        var searchResult = data.filter((element) => {
            if (element.name.toString().toLowerCase().includes(search.toLowerCase()) && search !== '' && cont < 5) {
                cont ++
                return element
            } else {
                return ''
            }
        });
        setPokemonL(searchResult);
        setFlag(true)
    }

    const handleSelected =(selected) => {
        setPokemonName({
            ...pokemonName,
            name: selected
        })
        setFlag(false);
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

    useOutsideClick({
        ref: autocomplete,
        handler: () => setFlag(false)
    })
    

    return (
        <Box h='100vh' bgGradient='linear(to-r, cyan, blue)'>
            <NavBar />
            <Center>
                <VStack>
                    <Center m='50px'>
                        <HStack>
                            <Box>
                                <Input type='text'
                                    placeholder='arcanine'
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
                                    autoComplete='off'
                                    w={['150px', '200px']}
                                />
                                {
                                    flag && pokemonL.length !== 0 &&
                                    <Box ref={autocomplete} position='absolute' w={['150px', '200px']} p='20px' boxShadow='2xl' rounded='md' bg='white'>
                                        {   
                                            pokemonL.map(element => (
                                                <Text key={element.name} cursor='pointer' onClick={() => handleSelected(element.name)}>{transformUppercase(element.name)}</Text>
                                            ))
                                        }
                                    </Box>
                                }
                            </Box>
                            <Stack direction={["column", "row"]}>
                                <Button w={['120px', '150px']} onClick={hanldeSearch} bg='blue' rounded='full' color='white' _hover={{ bg: 'blue.500' }} _focus={{ bg: 'blue.500' }}>
                                Search
                            </Button>
                            <Button w={['120px', '150px']} onClick={hanldeGenerator} bg='blue' rounded='full' color='white'  _hover={{ bg: 'blue.500' }} _focus={{ bg: 'blue.500' }}>Generator</Button>
                            </Stack>
                        </HStack>
                    </Center>           
                    {
                        showPokemon ? 
                            <Pokemon pokemon={pokemon} type='Add Pokemon'></Pokemon> 
                        :
                            <Center h='50%'>
                                <Text fontSize='3xl' w='70%' textAlign='center' mt='50px' bg='white' color='blue' p='25px' borderRadius='20px'>Search or generate a pokemon for your team</Text>
                            </Center>
                    }
                </VStack>
            </Center>
        </Box>
    )
}

export default Home
