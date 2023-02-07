import { Box, Button, Flex, Slide, Text, useDisclosure } from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import InvoiceCard from "./components/InvoiceCard/InvoiceCard";
import NewInvoiceModal from "./components/NewInvoiceModal/NewInvoiceModal";

function App() {
  const { isOpen, onToggle } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }

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

        <Slide direction="left" in={isOpen} style={{ zIndex: 10 }}>
          <NewInvoiceModal isModalOpen={isModalOpen} onRequestClose={handleCloseModal} />
        </Slide>
      </Flex>
    </Box>
  );
}

export default App;
