import { Box, Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {BsFillCircleFill} from 'react-icons/bs'
import {IoIosArrowForward} from 'react-icons/io'
import { IInvoice, IInvoiceCard } from '../../@types/types'
import { useNavigate } from 'react-router-dom'

const Invoice = ({id, date, name, status, total}:IInvoiceCard) => {

  const [invoiceData, setInvoiceData] = useState([]);
  const [invoiceStatus, setInvoiceStatus] = useState("");

  const navigate = useNavigate()

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
      setInvoiceStatus("white");
    }
  }, [status]);

  useEffect(() => {
    getInvoiceItems()
  }, []);

  let formatDate = new Date(date)

  return (
      <Box display="flex" justifyContent="space-between" alignItems="center" w="730px" h="20" bg="#1E2139" mt="4" p="1.5rem" color="white" borderRadius="8px" _hover={{border: "1px solid #7C5DFA", cursor: "pointer"}} onClick={()=>navigate(`/invoice/${id}`)}>
      <Box display="flex">
         <Text color="#7583C3">#</Text>
         <Text color="white" fontWeight="bold" fontSize="sm">{id}</Text>
      </Box>
      <Text fontSize="sm" fontWeight="thin">
        {new Intl.DateTimeFormat('en-US', { dateStyle: 'medium'}).format(formatDate)}
      </Text>
      <Text fontSize="sm" fontWeight="medium">
        {name}
      </Text>
      <Text fontSize="xl" fontWeight="bold">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(total)}
      </Text>
      <Box display="flex" alignItems="center" color={invoiceStatus}  justifyContent="center" w="24" p="2" h="10" borderRadius="4" gap="2" >
        <BsFillCircleFill size={8}/>
        <Text fontWeight="bold">{status}</Text>
      </Box>
      <IoIosArrowForward color="#7C5DFA" size={20}/>
    </Box>
  )
}

export default Invoice