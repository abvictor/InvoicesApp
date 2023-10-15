import { Box } from '@chakra-ui/react'
import SideBar from './components/SideBar/SideBar'
import Header from './components/Header/Header'
import Invoice from './components/Invoice/Invoice'
import { useEffect, useState } from 'react'
import { IInvoice, IInvoiceCard } from './@types/types'


function App() {

  const [invoiceCard, setInvoiceCard] = useState([]);

  async function getInvoice(){
    let invoices:any = localStorage.getItem("invoices");
    if (invoices) {
      invoices = JSON.parse(invoices);
      setInvoiceCard(invoices);
    }

  }


  useEffect(()=>{
    
    getInvoice()
  
  },[])

  return (
    <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" h="100%" w="100%"  >
       
       <Box position="absolute" top="0">
       <Header />
       
        <Box>
          {invoiceCard.map((item:any)=>(
            <Invoice
              date={item.invoice.invoice_date}
              id={item.invoice.id}
              name={item.invoice.bill_to_client_name}
              status={item.invoice.status} 
              total={item.invoice.total}/>
        ))}
        </Box>
        </Box> 
      </Box>
  )
}

export default App
