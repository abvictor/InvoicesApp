import { Box, Divider } from '@chakra-ui/react'
import { BsSunFill } from 'react-icons/bs'
import dollar from '../../assets/dollar.png'

const SideBar = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="space-between" left="0" top="0" alignItems="center" w="28" bg={'#252945'} h="100vh" position={"relative"} right="0" borderRightRadius="24">
      <Box display="flex" flexDirection="column" alignContent="center" justifyContent="end" w="100%" h="28" bgColor="#7C5DFA" borderRightRadius="24">
        <Box display="flex" alignItems="center" justifyItems="center" justifyContent="center" w="100&" h="52%" bgColor="#9277FF" top="0"  transition=".9s" borderBottomRightRadius="24" borderTopLeftRadius="24" _hover={{height: "90%", transition: ".9s", borderTopRightRadius: "12px" }}>
        <img src={dollar} style={{height: "3rem", width: "3rem", position: "absolute"}}/>

        </Box>
      </Box>

      <Box display="flex" h="44" flexDirection="column" alignItems="center" justifyContent="space-evenly">
          <BsSunFill size={20} color="#DFE3FA"/>
          <Divider w="100%" position="absolute" />
        <Box w="100%">
            <Box 
              mt="8"
              display="flex"
              borderRadius="44" 
              bgColor="yellow.300"
              color="yellow.700"
              justifyContent="center"
              alignContent="center"
              alignItems="center"
              w="8"
              h="8"
              fontWeight="semibold"
              _hover={{border:"2px solid #9277FF"}}
             >VA</Box>   
        </Box>
      </Box>  
    </Box>
  )
}

export default SideBar