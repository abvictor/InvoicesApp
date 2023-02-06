import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";
import SideMenu from "../src/components/SideMenu/SideMenu";
import NewInvoiceModal from "./components/NewInvoiceModal/NewInvoiceModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
    console.log("abre", isModalOpen);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
    console.log("fecha", isModalOpen);
  }

  return (
    <Box w="100%" h="100vh" display="flex">
      <SideMenu />
      <Flex w="100%" h="20" alignItems="center" justifyContent="space-evenly" justifyItems="center">
        <Text fontSize="3xl">Invoices</Text>
        <Button
          bgColor="purple.500"
          _hover={{ bgColor: "purple.600" }}
          onClick={handleOpenModal}
          gap={2}
        >
          <PlusCircle size={32} />
          New invoice
        </Button>
        <NewInvoiceModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
      </Flex>
    </Box>
  );
}

export default App;
