
import React from 'react';
import {useNavigate} from "react-router-dom"
import {Heading, Text, Box, Button, Center,bgGradient} from '@chakra-ui/react'
  
function Homepage() {
  const navigate = useNavigate();
  return (
      <Box w='100%' h='100%' padding={40} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
        
        <Center> <Heading mb={8} fontSize='5xl'>Modern online Tic-Tac-Toe Game</Heading> </Center>
        <Center> <Text mb={8} fontSize='2xl'color={'blackAlpha.800'}>Compete with your friends...</Text> </Center>
        <Center><Button onClick={()=>navigate("/game")}>Start Game</Button> </Center>
        
      </Box>
      
  )
};
  
export default Homepage;