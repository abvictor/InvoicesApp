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
  Slide,
  useDisclosure,
} from "@chakra-ui/react";

import Modal from "react-modal";
import { TModalProps } from "../../@types/types";
import { Input } from "../Input/Input";
import { FaTrash } from "react-icons/fa";
import { InvoiceSchema } from "../../utils/ModalSchemaValidation/schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IInvoice } from "../../@types/types";

const NewInvoiceModal = ({ isModalOpen, onRequestClose }: TModalProps) => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(InvoiceSchema),
  });

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

  const { isOpen, onToggle } = useDisclosure();

  const handleCreateInvoice: SubmitHandler<IInvoice> = (data) => {};

  return (
    <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
      <Modal isOpen={isModalOpen} onRequestClose={onRequestClose} style={customStyles}>
        <FormControl w="720px" h="100vh" as="form" onSubmit={handleSubmit(handleCreateInvoice)}>
          <Text fontSize="3xl" fontWeight="semibold">
            New invoice
          </Text>
          <Flex display="flex" flexDir="column" gap={2}>
            <Text fontSize="sm" fontWeight="semibold" color="purple.400">
              Bill From
            </Text>
            <Input
              label="Street Address"
              {...register("street_address")}
              error={formState.errors.street_address}
            />
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" mt={4}>
            <GridItem>
              <Input {...register("city")} error={formState.errors.city} label="City" />
            </GridItem>{" "}
            <GridItem>
              <Input
                {...register("post_code")}
                error={formState.errors.post_code}
                label="Post Code"
              />
            </GridItem>
            <GridItem>
              <Input {...register("country")} error={formState.errors.country} label="Country" />
            </GridItem>
          </Grid>
          <Flex display="flex" flexDir="column" mt={4}>
            <Text fontSize="sm" fontWeight="semibold" color="purple.400">
              Bill To
            </Text>
            <Input
              {...register("client_name")}
              error={formState.errors.client_name}
              label="Client's Name"
            />
            <Input
              {...register("client_email")}
              error={formState.errors.client_email}
              label="Client's Email"
            />
            <Input
              {...register("to_street_address")}
              error={formState.errors.to_street_address}
              label="Street Address"
            />
          </Flex>
          <Grid templateColumns="repeat(3, 1fr)" mt={4}>
            <GridItem>
              <Input {...register("to_city")} error={formState.errors.to_city} label="City" />
            </GridItem>{" "}
            <GridItem>
              <Input
                {...register("to_post_code")}
                error={formState.errors.to_post_code}
                label="Post Code"
              />
            </GridItem>
            <GridItem>
              <Input
                {...register("to_country")}
                error={formState.errors.to_country}
                label="Country"
              />
            </GridItem>
          </Grid>
          <Flex display="flex" flexDir="column" gap={4}>
            <Input type="date" {...register("date")} label="Invoice Date" error={null} />
            <Select placeholder="Payment Terms" bgColor="gray.800" border="none">
              <option value="option1">Next day</option>
              <option value="option3">Next 7 days</option>
              <option value="option3">Next 15 days</option>
              <option value="option3">Next 30 days</option>
            </Select>
            <Input
              {...register("project_description")}
              label="Project Description"
              error={formState.errors.project_description}
            />
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
                <Input
                  {...register("item_name")}
                  error={formState.errors.item_name}
                  label="Item Name"
                />
              </GridItem>{" "}
              <GridItem>
                <Input {...register("qty")} error={formState.errors.qty} label="QTY." />
              </GridItem>
              <GridItem>
                <Input {...register("price")} error={formState.errors.price} label="Price" />
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
            <Button
              h="12"
              bgColor="gray.800"
              borderRadius="24"
              fontSize="sm"
              onClick={onRequestClose}
            >
              Discard
            </Button>
            <Flex gap={2}>
              <Button h="12" bgColor="gray.600" borderRadius="24" fontSize="sm">
                Save as Draft
              </Button>
              <Button h="12" bgColor="purple.600" borderRadius="24" fontSize="sm" type="submit">
                Save & Send
              </Button>
            </Flex>
          </Flex>
        </FormControl>
      </Modal>
    </Slide>
  );
};

export default NewInvoiceModal;
