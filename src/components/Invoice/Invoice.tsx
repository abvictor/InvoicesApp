import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import { IInvoice, IInvoiceCard } from '../../@types/types'

const Invoice = ({id, date, name, status, total}:IInvoiceCard) => {

  const [invoiceData, setInvoiceData] = useState([]);
  const [invoiceStatus, setInvoiceStatus] = useState("");

  function getInvoiceItems(){
    let invoices:any = localStorage.getItem("invoices")

    setInvoiceData(invoices)
  }

  useEffect(() => {
    if (status === "Paid") {
      setInvoiceStatus("green.400");
    } else if (status === "Pending") {
      setInvoiceStatus("orange.400");
    } else {
      setInvoiceStatus("white.300");
    }
  }, [status]);

  useEffect(() => {
    getInvoiceItems()
  }, []);

  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" w="730px" h="24" bg="#1E2139" mt="12" p="1.5rem" color="white" borderRadius="8px" _hover={{border: "1px solid #7C5DFA"}}>
        <Box display="flex">
           <Text color="#7583C3">#</Text>
           <Text color="white" fontWeight="bold" fontSize="sm">{id}</Text>
        </Box>
      <Text fontSize="sm" fontWeight="thin">
        {date}
      </Text>
      <Text fontSize="sm" fontWeight="thin">
        {name}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        ${total}
      </Text>
      <Box display="flex" alignItems="center" bgColor={invoiceStatus} justifyContent="center" w="auto" p="2" h="8" borderRadius="4" gap="2" >
        <BsFillCircleFill size={8}/>
         <Text fontWeight="bold">{status}</Text>
      </Box>
      <IoIosArrowForward color="#7C5DFA" size={20}/>
    </Box>
  )
}

export default Invoice