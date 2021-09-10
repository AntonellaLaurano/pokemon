import React, { useState } from 'react'
import NavBar from '../../components/Navbar'
import { Button, Center, HStack, Input, Stack, useColorModeValue} from '@chakra-ui/react'
import { getPokemon } from '../../helpers/getPokemon'
import Pokemon from '../../components/Pokemon'


const Home = () => {

    const [showPokemon, setShowPokemon] = useState(false);
    const [pokemonName, setPokemonName] = useState('')
    const [pokemon, setPokemon] = useState({});

    const hanldeChange = (e) => {
        setPokemonName(
            [e.target.name] = e.target.value)
        console.log(pokemonName)
    }

    const hanldeSearch = async () => {
        if (pokemonName !== '') {
             try {
                const data = await getPokemon(pokemonName);
                setPokemon(data);
                setShowPokemon(true);
                console.log(data.id)
            } catch (error) {
                console.log(error);
            }
        }
    }

    const hanldeGenerator = async () => {
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
                    <Input type={'text'}
                            placeholder={'arcanine'}
                            color={useColorModeValue('gray.800', 'gray.200')}
                            bg={useColorModeValue('gray.100', 'gray.600')}
                            rounded={'full'}
                            border={0}
                            _focus={{
                            bg: useColorModeValue('gray.200', 'gray.800'),
                            outline: 'none',
                        }}
                        name='pokemonName'
                        onChange={hanldeChange}
                    />
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
