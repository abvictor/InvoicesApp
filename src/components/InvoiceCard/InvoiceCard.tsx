import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { CardDetails } from "../../@types/themes";

const InvoiceCard = ({ id, date, name, total, status }: CardDetails) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="53rem"
      h="24"
      bgColor="gray.800"
      borderRadius="12"
      _hover={{ border: "1px", borderColor: "purple.400" }}
    >
      <Grid templateColumns="repeat(5, 1fr) 0.10fr" gap={10}>
        <GridItem display="flex" alignItems="center" gap={1}>
          <Text fontSize="lg" fontWeight="semibold" color="purple.500">
            #
          </Text>
          <Text fontSize="lg" fontWeight="semibold">
            3080
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="lg">17 Aug 2021</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="lg">Victor Amaral</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="lg" fontWeight="semibold">
            $ 144,60
          </Text>
        </GridItem>
        <GridItem
          borderRadius="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          bgColor="green.500"
        >
          <BsFillCircleFill size={8} />
          <Text fontSize="lg" fontWeight="semibold" opacity={0.9}>
            Paid
          </Text>
        </GridItem>
        <GridItem>
          <MdOutlineKeyboardArrowRight color="#6B46C1" size={32} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default InvoiceCard;
