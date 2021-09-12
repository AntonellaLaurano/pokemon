import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Form, Formik } from 'formik';

import { usersArray } from '../../api/users';
import { login } from '../../redux/actions/auth';


const Login = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false)
  
  const [user, setUser] = useState({
    username: '',
    password: '' 
  })

  const { username, password } = user;

  const handleClick = () => setShow(!show)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const users = usersArray;

    const comparativeUser = users.find( (element) => element.username === user.username);
    if(comparativeUser){
      if(comparativeUser.password === user.password) {
          console.log('correcto')
          dispatch(login(comparativeUser));
      } else {
          console.log('contraseña incorrecta');
      }
    } else {
        console.log('usuario incorrecto');
    }
  }

  return (
      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>s
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Formik>
              <Form onSubmit={handleLogin}>
                <FormControl id="email" mb={'10px'}>
                  <FormLabel>Username</FormLabel>
                  <Input onChange={handleChange} value={username} name='username' type="text" placeholder="Enter username" />
                </FormControl>
                <FormControl id="password" mb={'10px'}>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input onChange={handleChange} value={password} name='password' pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password"/>
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick} color={'black'}>
                        {show ? <ViewIcon/> : <ViewOffIcon/>}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} mt={'30px'}>
                  <Button type='submit' bg={'blue'} color={'white'} _hover={{ bg: 'blue.500'}}>
                    Sign in
                  </Button>
                </Stack>
              </Form>
            </Formik>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login