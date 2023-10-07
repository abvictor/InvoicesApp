import { Box, Flex, Text } from '@chakra-ui/react'
import {BsFillCircleFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'

const Invoice = () => {

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" w="730px" h="24" bg="#1E2139" mt="12" p="1.5rem" color="white" borderRadius="8px" _hover={{border: "1px solid #7C5DFA"}}>
        <Box display="flex">
           <Text color="#7583C3">#</Text>
           <Text color="white" fontWeight="bold" fontSize="sm">RT3080</Text>
        </Box>
      <Text fontSize="sm" fontWeight="thin">
        Due 18 Aug 2021
      </Text>
      <Text fontSize="sm" fontWeight="thin">
        Jensen Huang
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        $1,800.90
      </Text>
      {/* <Box display="flex" alignItems="center" justifyContent="center" w="16" h="8" borderRadius="4" gap="2" >
        <BsFillCircleFill size={8}/>
         <Text>Paid</Text>
      </Box> */}
      <IoIosArrowForward color="#7C5DFA" size={20}/>
    </Box>
  )
}

export default Invoice