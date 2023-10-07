import { Box, Container } from '@chakra-ui/react'
import { useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Invoice from './components/Invoice/Invoice'


function App() {

  return (
    <Box display="flex" flexDir="column" justifyContent="center" alignItems="center"  h="100%" w="100%" >
      <Box position="absolute" left="0" top="0">
        <SideBar />
      </Box>
      <Header />  
      <Invoice />
    </Box>
  )
}

export default App
