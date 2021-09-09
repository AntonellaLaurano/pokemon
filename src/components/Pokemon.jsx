import React from 'react'
import { useDispatch } from 'react-redux';
import { pokemonDetails } from '../redux/actions/pokemon';
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
  } from '@chakra-ui/react';

const Pokemon = ({ pokemon }) => {
  const dispatch = useDispatch();


  console.log(pokemon);
  console.log(pokemon.abilities)
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const handleDetails = () => {
    dispatch(pokemonDetails(pokemon));
  } 

  return (
        <Center py={6}>
          <Box maxW={'300px'} w={'full'} bg={useColorModeValue('white', 'gray.800')} boxShadow={'2xl'} rounded={'md'} overflow={'hidden'}>
            <Box h={'80px'} w={'full'} bg={'blue'} />
            <Flex justify={'center'} mt={-12}>
              <Avatar 
                size={'2xl'} 
                css={{border: '2px solid white'}} 
                name={pokemon.name}
                src={img}
                />
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
                  <Button size={'md'} mt={2} bg={useColorModeValue('#151f21', 'gray.900')} color={'white'} rounded={'md'} _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg', }}>
                    Add Pokemon
                  </Button>
              </Center>
              
            </Box>
          </Box>
      </Center>
  )
}

export default Pokemon
