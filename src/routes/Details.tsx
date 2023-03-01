import { Box, Button, Flex, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import { IInvoice } from "../@types/types";
import { db } from "../firebase/config";

import { useFetchDocument } from "../hooks/useFetchDocument";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const docId = "3tfCGMPwr987XOp1REHK";

  const { document: invoice } = useFetchDocument("invoices", docId);

  console.log(invoice);
  return (
    <Box display="flex" flexDir="column" w="100%" h="100vh" bgColor="gray.800" alignItems="center">
      <Box
        display="flex"
        alignItems="center"
        mt="24"
        position="absolute"
        _hover={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        <MdOutlineKeyboardArrowLeft color="#6b46c1" size="28" />
        <Text fontSize="sm" fontWeight="semibold">
          Go back
        </Text>
      </Box>
      {/* <Box
        display="flex"
        alignItems="center"
        width={730}
        h="28"
        bgColor="gray.900"
        mt="36"
        borderRadius="12"
        p="8"
        justifyContent="space-between"
      >
        <Flex display="flex" align="center" gap="8">
          <Text fontSize="sm">Status</Text>
          <Status status={invoice.status} />
        </Flex>
        <Flex display="flex" align="center" gap="4">
          <Button fontSize="sm" w="20" h="12" borderRadius="24" bgColor="gray.700">
            Edit
          </Button>
          <Button fontSize="sm" w="20" h="12" borderRadius="24" bgColor="#ec5757">
            Delete
          </Button>
        </Flex>
      </Box>
      <Box
        w={730}
        h="auto"
        bgColor="gray.900"
        mt="4"
        borderRadius="8"
        display="flex"
        flexDir="column"
      >
        <Flex justifyContent="space-between">
          <Stack p="8">
            <Flex>
              <Text color="purple.300">#</Text>
              <Text fontWeight="bold">{id}</Text>
            </Flex>
            <Text fontSize="sm">{details.data.project_description}</Text>
          </Stack>
          <Stack p="8">
            <Text fontSize="sm">{details.data.street_address}</Text>
            <Text fontSize="sm">{details.data.city}</Text>
            <Text fontSize="sm">{details.data.post_code}</Text>
            <Text fontSize="sm">{details.data.country}</Text>
          </Stack>
        </Flex>

        <Grid justifyItems="center" gridTemplateColumns="repeat(3, 1fr)" alignItems="center">
          <Stack>
            <GridItem fontSize="sm">Invoice Date</GridItem>
            <GridItem fontWeight="bold" fontSize="lg">
              {details.data.date}
            </GridItem>
          </Stack>
          <Stack>
            <GridItem fontSize="sm">Bill To</GridItem>
            <GridItem fontWeight="bold" fontSize="lg">
              {details.data.client_name}
            </GridItem>
            <GridItem fontSize="sm">{details.data.to_street_address}</GridItem>
            <GridItem fontSize="sm">{details.data.to_city}</GridItem>
            <GridItem fontSize="sm">{details.data.to_post_code}</GridItem>
            <GridItem fontSize="sm">{details.data.to_country}</GridItem>
          </Stack>
          <Stack>
            <GridItem fontSize="sm">Sent To</GridItem>
            <GridItem fontWeight="bold" fontSize="lg">
              {details.data.client_email}
            </GridItem>
          </Stack>
          <Stack>
            <GridItem fontSize="sm">Payment Due</GridItem>
            <GridItem fontWeight="bold" fontSize="lg">
              <Text>Next 7 days</Text>
            </GridItem>
          </Stack>
        </Grid>
        <Box display="flex" flexDir="column" alignItems="center" mt="4">
          <Box bgColor="gray.600" p="8" borderRadius="8" w="90%" mb="8">
            <Flex justify="space-between">
              <Text fontSize="sm">Item Name</Text>
              <Text fontSize="sm">QTY.</Text>
              <Text fontSize="sm">Price</Text>
              <Text fontSize="sm">Total</Text>
            </Flex>
            {details?.items.map((item) => (
              <Flex>
                <Text>{item.name}</Text>
                <Text>{item.qty}</Text>
                <Text>{item.price}</Text>
                <Text>{item.total}</Text>
              </Flex>
            ))}
          </Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Details;
