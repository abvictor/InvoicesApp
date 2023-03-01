import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { ICardDetails } from "../../@types/types";
import { format, parse } from "date-fns";
import Status from "../Status/Status";
import { Link } from "react-router-dom";

const InvoiceCard = ({ id, date, name, total, status }: ICardDetails) => {
  let formatedDate = format(new Date(), "dd-MMM-yyyy").replaceAll("-", " ");

  return (
    <Link to={id}>
      <Box
        display="flex"
        p="4"
        alignItems="center"
        textAlign="center"
        justifyContent="space-around"
        w="53rem"
        h="24"
        bgColor="gray.800"
        borderRadius="12"
        _hover={{ border: "1px", borderColor: "purple.400" }}
      >
        <Grid
          templateColumns="repeat(5, 1fr) 0.15fr"
          gap={10}
          justifyContent="space-between"
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
              {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
                Number(total)
              )}
            </Text>
          </GridItem>
          <Status status={status} />
          <GridItem>
            <MdOutlineKeyboardArrowRight color="#6B46C1" size={32} />
          </GridItem>
        </Grid>
      </Box>
    </Link>
  );
};

export default InvoiceCard;
