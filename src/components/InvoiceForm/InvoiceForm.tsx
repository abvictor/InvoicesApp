import { Box, Button, Flex, Input, Select, Stack, Text } from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa'
import { Dock } from 'react-dock'
import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';


import {InvoiceFormProps} from '../../@types/types'
import { invoiceSchema } from '../../helpers/formValidator'


const InvoiceForm = ({isOpen, handleClose}:InvoiceFormProps) => {
   const {register, handleSubmit: onSubmit, formState: { errors }} = useForm({resolver: yupResolver(invoiceSchema)})
   const [status, setStatus] = useState('')

   function handleSubmit(e: any) {
      function gerarNumeroAleatorio() {
          return Math.floor(Math.random() * 9000) + 1000;
      }
      let id = gerarNumeroAleatorio();
  
      const storedInvoices = localStorage.getItem('invoices');
  
      const invoices = storedInvoices ? JSON.parse(storedInvoices) : [];
  
      const dataToStore = {
          invoice: {
              ...e,
              status: status,
              id: id
          }
      };
      invoices.push(dataToStore);
  
      try {
          localStorage.setItem('invoices', JSON.stringify(invoices));
      } catch (error) {
          console.log(error);
      }
      handleClose();
  }

  return (
    <Dock
    isVisible={isOpen} 
    dimMode='none'
    position='left'
    size={"400px"}
    >

    <Box as='form' h="auto" bgColor="#141625" p="4" w="700px" onSubmit={onSubmit(handleSubmit)}>
        <Text fontSize="3xl" fontWeight="semibold" color="white">New Invoice</Text>
        <Stack mt="4" p="4">
            <Text fontSize="sm" fontWeight="medium" color="#7C5DFA">Bill from</Text>
            <Text fontSize="sm" color="white" mt="2">Street Address</Text>
            <Input w="630px" color="white" h="12" bgColor="#1E2139" border="none" {...register('bill_from_street_address')}/>
            <Text color="red.400">{errors?.bill_from_street_address?.message}</Text>
            <Flex gap="2">
              <Stack>
                  <Text fontSize="sm" color="white" mt="2">City</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white" {...register('bill_from_city')}/>
                  <Text color="red.400">{errors?.bill_from_city?.message}</Text>
               </Stack>
               <Stack>
                  <Text fontSize="sm" color="white" mt="2">Post Code</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white"{...register('bill_from_post_code')}/>
                  <Text color="red.400">{errors?.bill_from_post_code?.message}</Text>
               </Stack>
               <Stack>
                  <Text fontSize="sm" color="white" mt="2">Country</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white"{...register('bill_from_contry')}/>
                  <Text color="red.400">{errors?.bill_from_contry?.message}</Text>
               </Stack>        
            </Flex>

           <Text fontSize="sm" fontWeight="medium" color="#7C5DFA" mt="4">Bill to</Text>

           <Text fontSize="sm" color="white" mt="2">Client's Name</Text>

           <Input w="630px" h="12" bgColor="#1E2139" border="none" color="white" {...register('bill_to_client_name')}/>
           <Text color="red.400">{errors?.bill_to_client_name?.message}</Text>


           <Text fontSize="sm" color="white" mt="2">Client's Email</Text>

           <Input w="630px" h="12" bgColor="#1E2139" border="none" color="white" {...register('bill_to_client_email')}/>
           <Text color="red.400">{errors?.bill_to_client_email?.message}</Text>


           <Text fontSize="sm" color="white" mt="2">Street Address</Text>

           <Input w="630px" h="12" bgColor="#1E2139" border="none" color="white" {...register('bill_to_street_address')}/>
           <Text color="red.400">{errors?.bill_to_street_address?.message}</Text>


           <Flex gap="2">
              <Stack>
                  <Text fontSize="sm" color="white" mt="2">City</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white" {...register('bill_to_city')}/>
                  <Text color="red.400">{errors?.bill_to_city?.message}</Text>

               </Stack>
               <Stack>
                  <Text fontSize="sm" color="white" mt="2">Post Code</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white" {...register('bill_to_post_code')}/>
                  <Text color="red.400">{errors?.bill_to_post_code?.message}</Text>
               </Stack>
               <Stack>
                  <Text fontSize="sm" color="white" mt="2">Country</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white" {...register('bill_to_country')}/>
                  <Text color="red.400">{errors?.bill_to_country?.message}</Text>
               </Stack>        
            </Flex>

           <Text fontSize="sm" color="white" mt="2">Invoice Date</Text>
           <Input  color="white" fontWeight="semibold" type='date' w="630px" h="12" bgColor="#1E2139" border="none" {...register('invoice_date')} />
           <Text color="red.400">{errors?.invoice_date?.message}</Text>


           <Text fontSize="sm" color="white" mt="2">Payment Terms</Text>
           <Select w="630px" h="12" bgColor="#1E2139" border="none" color="white" fontWeight="semibold" {...register('invoice_payment_term')}>
               <option>Next 1 day</option>
               <option>Next 7 days</option>
               <option>Next 15 days</option>
               <option>Next 30 days</option>
           </Select>
           <Text color="red.400">{errors?.invoice_payment_term?.message}</Text>


           <Text fontSize="sm" color="white" mt="2">Project Description</Text>
           <Input  color="white" fontWeight="semibold" w="630px" h="12" bgColor="#1E2139" border="none" {...register('invoice_description')}/>
           <Text color="red.400">{errors?.invoice_description?.message}</Text>
           <Box mt="4">
             <Text fontWeight="bold" fontSize="2xl" color="gray.500">Item List</Text>

             <Flex gap="2">
              <Stack>
                  <Text fontSize="sm" color="white" mt="2">Item Name</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white" {...register('item_name')}/>
                  <Text color="red.400">{errors?.item_name?.message}</Text>

               </Stack>
               <Stack>
                  <Text fontSize="sm" color="white" mt="2">Qty.</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white" {...register('item_qty')}/>
                  <Text color="red.400">{errors?.item_qty?.message}</Text>
               </Stack>
               <Stack>
                  <Text fontSize="sm" color="white" mt="2">Price</Text>
                  <Input w="100%" h="12" bgColor="#1E2139" border="none" color="white"{...register('item_price')}/>
                  <Text color="red.400">{errors?.item_price?.message}</Text>
               </Stack>   
               <Stack align="center" justify="center">
                  <Text fontSize="sm" color="white" mt="2">Total</Text>
                  <Flex mt="2" gap="4" ml="8">
                    <Box><Text bg="transparent" w="100%" h="12" color="white" fontWeight="bold">0.00</Text></Box>
                    <FaTrash size={16} color="#9277FF" />
                  </Flex>
               </Stack>      
            </Flex>

            <Button w="100%" h="12" mt="4" bgColor="#1E2139" color="white" borderRadius="28" fontWeight="bold" _hover={{backgroundColor: "#1E2129"}}> + Add New Item</Button>
           </Box>
        <Flex justifyContent="space-between" mt="8">
            <Button h="12" bgColor="#1E2139" color="white" borderRadius="28" onClick={handleClose}>Discard</Button>

            <Flex gap="2">
                <Button color="white" h="12" borderRadius="28" bgColor="#373b53"  type="submit" value='Draft' onClick={(e:any)=>setStatus(e.target.value)}>Save as Draft</Button>
                <Button color="white" h="12" borderRadius="28" bgColor="#7c5dfa" type='submit' value='Pending' onClick={(e:any)=>setStatus(e.target.value)}>Save & Send</Button>
            </Flex>
        </Flex>
        </Stack>      
    </Box>
</Dock>
  )
}

export default InvoiceForm