import { Box, Button, Select, Stack, Text } from "@chakra-ui/react"
import { useState } from "react"
import {MdOutlineAddCircle} from 'react-icons/md'
import InvoiceForm from "../InvoiceForm/InvoiceForm"

const Header = () => {
  const [showDock, setShowDock] = useState(false)


  function handleOpenSideBar(){
    setShowDock(!showDock)
  }



  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" w={"730px"} mt="16">
       <Stack>
         <Text fontSize={["4xl"]} fontWeight={"bold"} color="white">Invoices</Text> 
         <Text fontSize={["sm"]}  fontWeight={"light"} color="white">There are 7 total invoices</Text> 
       </Stack> 
       <Box display="flex">
         <Select iconColor="#7C5DFA" iconSize="2xl" variant="filled" fontWeight="bold" fontSize="sm" placeholder="Filter by status" color="white" bg="#141625" w="36" border="none" _hover={{bg: "", cursor: "pointer"}}>
            <option>Paid</option>
            <option>Pending</option>
            <option>Draft</option>
         </Select> 
          <Button
           onClick={handleOpenSideBar}
           w="36"
           bg="#7C5DFA"
           fontSize="sm"
           borderRadius="3xl"
           h="12"
           color="white"
           leftIcon={<MdOutlineAddCircle size={32}/>}>New invoice</Button>
       </Box>
       <InvoiceForm isOpen={showDock} handleClose={handleOpenSideBar}/>
    </Box>
  )
}

export default Header