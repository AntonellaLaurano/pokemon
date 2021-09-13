 import React from 'react'
 import { Box, Flex, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
 
 const Stats = ({ title, stat, icon }) => {
    return (
      <Stat px={{ base: 2, md: 4 }} py='5' shadow='xl' border='1px solid' borderColor='blue' rounded='lg' bg='white'>
        <Flex justifyContent='space-between'>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight='medium' isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize='2xl' fontWeight='medium'>
              {stat}
            </StatNumber>
          </Box>
        </Flex>
      </Stat>
    )
 }
 
 export default Stats
 