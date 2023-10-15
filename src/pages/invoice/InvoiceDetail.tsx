import { Box, Button, Text } from "@chakra-ui/react"
import { IoIosArrowBack } from "react-icons/io"

import {useNavigate, useParams} from 'react-router-dom'

const InvoiceDetail = () => {
  const navigate = useNavigate()

  let {id} = useParams()

  
  return (
    <Box 
      display="flex" 
      flexDir="column"
      justifyContent="center"
      justifyItems="center"
      alignContent="center"
      alignItems="center"
      w="100%"
      h="12"
      position="absolute"
      top="22rem"
      > 
      <Text display="flex" alignItems="center" gap="2" fontSize="16" color="white" fontWeight="bold" mb="4" _hover={{cursor: "pointer"}} onClick={()=>navigate('/')} ml="-42rem">
        <IoIosArrowBack size={16} color="#9277FF"/> 
          Go back
      </Text>

      <Box display="flex" alignContent="center" alignItems="center" justifyContent="space-between" justifyItems="center" p="8" w="48rem" h="28" bg={"#1e2139"} borderRadius="6">
        <Box display="flex" gap="2">
          <Text color="white">Status</Text>
          <Box color="green.400">Pending</Box>
        </Box>

        <Box display="flex" gap="2">
          <Button h="12" bg="#252945" color="white" borderRadius="24">Status</Button>
          <Button h="12" bg="red.400" color="white" borderRadius="24">Pending</Button>
        </Box>
      </Box>

        <Box display="flex" justifyContent="space-between" justifyItems="center" p="8" w="48rem" bg={"#1e2139"} borderRadius="6" mt="4" border="1px solid red">
        <Box display="flex" gap="2">
         <Box display="flex" flexDirection="column">
          <Text display="flex" color="purple.300" fontWeight="bold">#<Text color="white">{id}</Text></Text>
          <Text display="flex" color="white" fontWeight="thin">Re-branding</Text>
         </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap="2">
          <Text display="flex" color="white" fontSize="xs" fontWeight="thin">19 Union Terrace</Text>
          <Text display="flex" color="white" fontSize="xs" fontWeight="thin">London</Text>
          <Text display="flex" color="white" fontSize="xs" fontWeight="thin">E1 3EZ</Text>
          <Text display="flex" color="white" fontSize="xs" fontWeight="thin">United Kingdom</Text>
        </Box>
        </Box>

        <Box display="flex" justifyContent="space-between" gap="8">
          <Box display="flex" flexDir="column" gap="2">
            <Text display="flex" color="white" fontSize="md" fontWeight="thin">Invoice Date</Text>
            <Text display="flex" color="white" fontSize="xl" fontWeight="semibold">17 Aug 2021</Text>

            <Text display="flex" color="white" fontSize="md" fontWeight="thin">Payment Due</Text>
            <Text display="flex" color="white" fontSize="xl" fontWeight="semibold">18 Aug 2021</Text>
          </Box>

          <Box display="flex" flexDir="column">
            <Text display="flex" color="white" fontSize="md" fontWeight="thin">Bill To</Text>
            <Text display="flex" color="white" fontSize="xl" fontWeight="semibold">Jensen Huang1</Text>
            <Text display="flex" color="white" fontSize="xs" fontWeight="thin">106 Kendell Street</Text>
            <Text display="flex" color="white" fontSize="xs" fontWeight="thin">Sharrington</Text>
            <Text display="flex" color="white" fontSize="xs" fontWeight="thin">NR24 5WQ</Text>
            <Text display="flex" color="white" fontSize="xs" fontWeight="thin">United Kingdom</Text>
          </Box>
          
          <Box display="flex" flexDir="column">
            <Text display="flex" color="white" fontSize="md" fontWeight="thin">Sent to</Text>
            <Text display="flex" color="white" fontSize="xl" fontWeight="semibold">jensenh@mail.com</Text>
          </Box>
        </Box>
    </Box>
  )
}

export default InvoiceDetail