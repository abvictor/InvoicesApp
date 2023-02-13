import { Box, Button, Collapse, Flex, Slide, Text, useDisclosure } from "@chakra-ui/react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { PlusCircle } from "phosphor-react";
import { useEffect, useState } from "react";
import InvoiceCard from "./components/InvoiceCard/InvoiceCard";
import NewInvoiceModal from "./components/NewInvoiceModal/NewInvoiceModal";
import { db } from "../src/firebase/config";
import { ICardDetails } from "./@types/types";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

  const [invoices, setInvoices] = useState([]);

  const userCollectionRef = collection(db, "invoices");

  useEffect(() => {
    const getInvoices = async () => {
      const data = await getDocs(userCollectionRef);
      setInvoices(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getInvoices();
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyItems="center"
    >
      <Flex
        w="100%"
        h="20"
        alignItems="center"
        justifyContent="space-evenly"
        justifyItems="center"
        mt={20}
      >
        <Text fontSize="4xl" fontWeight="semibold">
          Invoices
        </Text>

        <Button
          bgColor="purple.500"
          _hover={{ bgColor: "purple.600" }}
          onClick={handleOpenModal}
          gap={2}
        >
          <PlusCircle size={32} />
          New invoice
        </Button>

        <NewInvoiceModal isModalOpen={isModalOpen} onRequestClose={handleCloseModal} />
      </Flex>
      <Flex>
        {invoices.map((invoice: ICardDetails) => (
          <InvoiceCard
            key={invoice.id}
            id={invoice.invoice_id}
            name={invoice.client_name}
            date={invoice.date}
            status={invoice.status}
            total={invoice.total_invoice}
          />
        ))}
      </Flex>
    </Box>
  );
}

export default App;
