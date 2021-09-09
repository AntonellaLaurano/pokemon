import React from 'react';

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import logo from '../images/logo.png'

const Links = ['Home', 'Your Pokemon'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={`/${(children.toLowerCase()).replace(/\s+/g, '')}`}>
    {children}
  </Link>
);

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('red.100', 'red.900')} px={4} color='white'>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton 
              size={'md'} 
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
              <Box><Image src={logo} alt='Logo' h='30px' /></Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                  {
                    Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))
                  }
              </HStack>
          </HStack>
          <Flex alignItems={'center'}>
              <Menu>
                  <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                      <Avatar size={'sm'} bg={'red.100'} />
                  </MenuButton>
                  <MenuList color='black'>
                      <MenuItem>Logout</MenuItem>
                  </MenuList>
              </Menu>
          </Flex>
      </Flex>
          {
            isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                  {
                    Links.map((link) => (
                        <NavLink key={link}>{link}</NavLink>
                    ))
                  }
                </Stack>
            </Box>
            ) : null
          }

          
      </Box>
  );
}

export default NavBar;