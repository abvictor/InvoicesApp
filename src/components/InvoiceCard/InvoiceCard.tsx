import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillCircleFill } from "react-icons/bs";
import { ICardDetails } from "../../@types/types";
import { format, parse } from "date-fns";

const InvoiceCard = ({ id, date, name, total, status }: ICardDetails) => {
  let formatedDate = format(new Date(), "dd-MMM-yyyy").replaceAll("-", " ");
  console.log(formatedDate);
  return (
    <Box
      display="flex"
      p="4"
      alignItems="center"
      textAlign="center"
      justifyContent="center"
      w="53rem"
      h="20"
      bgColor="gray.800"
      borderRadius="12"
      _hover={{ border: "1px", borderColor: "purple.400" }}
    >
      <Grid
        templateColumns="repeat(5, 1fr) 0.15fr"
        gap={10}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem display="flex" alignItems="center" gap={1}>
          <Text fontSize="lg" fontWeight="semibold" color="purple.500">
            #
          </Text>
          <Text fontSize="sm" fontWeight="semibold">
            {id}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="sm">{formatedDate}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="sm">{name}</Text>
        </GridItem>
        <GridItem>
          <Text fontSize="xl" fontWeight="semibold">
            {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(total)}
          </Text>
        </GridItem>
        <GridItem
          borderRadius="4"
          display="flex"
          alignItems="center"
          justifyContent="center"
          h="8"
          gap={2}
          bgColor="green.500"
        >
          <BsFillCircleFill size={8} />
          <Text fontSize="lg" fontWeight="semibold" opacity={0.9}>
            {status}
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
