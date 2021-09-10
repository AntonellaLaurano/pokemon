import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePokemon, pokemonDetails, pokemonList } from '../redux/actions/pokemon';
import {
    Heading,
    Avatar,
    Box,
    Center,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Link,
    Alert,
    AlertIcon,
  } from '@chakra-ui/react';
import { checkPokemon } from '../helpers/checkPokemon';

const Pokemon = ({ pokemon, type }) => {
  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemons.pokemons);

  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false)
  console.log(showMessage)

  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const handleDetails = () => {
    dispatch(pokemonDetails(pokemon));
  } 

  const handleAdd = () => {
    const value = checkPokemon(pokemon,pokemons)
    setMessage(value);
    if( value === 'success') {
      dispatch(pokemonList(pokemon));
    }
    setShowMessage(true);
  }

  const handleDelete = () => {
    dispatch(deletePokemon(pokemon.id))
  }

  return (
        <Center py={6}>
          <Box maxW={'300px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'} >
            <Box h={'80px'} w={'full'} bg={'blue'} />
            <Flex justify={'center'} mt={-12}>
              <Avatar size={'2xl'} css={{border: '2px solid white'}} name={pokemon.name} src={img}/>
            </Flex>
            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={2}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                  {pokemon.name}
                </Heading>
                <Box w={'90%'}>
                  <Text>Type:</Text>
                  {
                    pokemon.types.map((type) => (
                      <Text key={type.type.name} color={'gray.500'}>{type.type.name}</Text>
                    ))
                  }
                </Box>
                <Box w={'90%'}>
                  <Text>Abilities:</Text>
                  {
                    pokemon.abilities.map((ability) => (
                      <Text key={ability.ability.name} color={'gray.500'}>{ability.ability.name}</Text>
                    ))
                  }
                </Box>
              </Stack>
              <Center>
                  <Link onClick={handleDetails} href='/pokemondetails' size={'md'} mt={2} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg', }}>
                    Details
                  </Link>
              </Center>
              <Center>
                {
                  type === 'Add Pokemon' ?
                    <Button onClick={handleAdd} size={'md'} mt={2} bg={'gray'} color={'white'} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg', }}>
                      Add Pokemon
                    </Button>
                    :
                    <Button onClick={handleDelete} size={'md'} mt={2} bg={'red.100'} color={'white'} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg', }}>
                      Delete Pokemon
                    </Button>
                }
                  
              </Center>
            </Box>
            {
              showMessage && 
              <Alert status={message}>
                <AlertIcon />
                {
                  message === 'error' ? 'Pokemon is alredy on his team' : message === 'warning' ? 'Maximum 6 on your team' : 'Pokemon added'
                }
              </Alert>
            }
          </Box>
      </Center>
  )
}

export default Pokemon
