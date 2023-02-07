import {
  Box,
  Button,
  FormControl,
  Grid,
  GridItem,
  Stack,
  Text,
  Flex,
  Select,
} from "@chakra-ui/react";
import Modal from "react-modal";
import { ModalProps } from "../../@types/themes";
import { Input } from "../Input/Input";
import { FaTrash } from "react-icons/fa";

const NewInvoiceModal = ({ isModalOpen, onRequestClose }: ModalProps) => {
  const customStyles = {
    content: {
      height: "100vh",
      width: "720px",
      backgroundColor: "#171923",
      borderColor: "#e2e2",
      top: 0,
      bottom: 0,
      right: 0,
      left: 110,
      position: "absolute",
      overflow: "scroll",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.0)",
      position: "fixed",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <Box w={"720px"} h="100vh">
        <Text fontSize="3xl" fontWeight="semibold">
          New Invoice
        </Text>
        <Flex display="flex" flexDir="column" gap={2}>
          <Text fontSize="sm" fontWeight="semibold" color="purple.400">
            Bill From
          </Text>
          <Input name="Street Address" label="Street Address" error={null} />
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" mt={4}>
          <GridItem>
            <Input name="City" label="City" error={null} />
          </GridItem>{" "}
          <GridItem>
            <Input name="City" label="Post Code" error={null} />
          </GridItem>
          <GridItem>
            <Input name="City" label="Country" error={null} />
          </GridItem>
        </Grid>
        <Flex display="flex" flexDir="column" mt={4}>
          <Text fontSize="sm" fontWeight="semibold" color="purple.400">
            Bill To
          </Text>
          <Input name="Street Address" label="Client's Name" error={null} />
          <Input name="Street Address" label="Client's Email" error={null} />
          <Input name="Street Address" label="Street Address" error={null} />
        </Flex>
        <Grid templateColumns="repeat(3, 1fr)" mt={4}>
          <GridItem>
            <Input name="City" label="City" error={null} />
          </GridItem>{" "}
          <GridItem>
            <Input name="City" label="Post Code" error={null} />
          </GridItem>
          <GridItem>
            <Input name="City" label="Country" error={null} />
          </GridItem>
        </Grid>
        <Flex display="flex" flexDir="column" gap={4}>
          <Input type="date" name="Street Address" label="Payment Terms" error={null} />
          <Select placeholder="Payment Terms" bgColor="gray.800" border="none">
            <option value="option1">Next day</option>
            <option value="option3">Next 7 days</option>
            <option value="option3">Next 15 days</option>
            <option value="option3">Next 30 days</option>
          </Select>
          <Input name="Street Address" label="Project Description" error={null} />
        </Flex>
        <Flex display="flex" flexDir="column" gap={4} mt={4}>
          <Text fontSize="xl" fontWeight="semibold" color="gray.400">
            Item List
          </Text>
          <Grid
            templateColumns="repeat(5, 1fr) 0.1fr"
            justifyItems="center"
            alignItems="center"
            gap={2}
          >
            <GridItem>
              <Input name="City" label="Item Name" error={null} />
            </GridItem>{" "}
            <GridItem>
              <Input name="City" label="QTY." error={null} />
            </GridItem>
            <GridItem>
              <Input name="City" label="Price" error={null} />
            </GridItem>
            <GridItem justify="center" align="center">
              <Text>Total</Text>
              <Flex justify="center" mt={4}>
                <Text fontWeight="bold">0.00</Text>
              </Flex>
            </GridItem>
            <GridItem _hover={{ cursor: "pointer" }}>
              <FaTrash size={24} />
            </GridItem>
          </Grid>
          <Button w="100%" h="12" bgColor="gray.800" borderRadius="8">
            + Add new item
          </Button>
        </Flex>
        <Flex justifyContent="space-between" mt={4}>
          <Button h="12" bgColor="gray.800" borderRadius="24" fontSize="sm">
            Discard
          </Button>
          <Flex gap={2}>
            <Button h="12" bgColor="gray.600" borderRadius="24" fontSize="sm">
              Save as Draft
            </Button>
            <Button h="12" bgColor="purple.600" borderRadius="24" fontSize="sm">
              Save & Send
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Modal>
  );
};

export default NewInvoiceModal;
