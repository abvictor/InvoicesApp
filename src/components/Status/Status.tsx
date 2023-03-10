import { Box, Flex } from "@chakra-ui/react";
import { BsFillCircleFill } from "react-icons/bs";
import { ICardDetails } from "../../@types/types";

const Status = ({ status }: Pick<ICardDetails, "status">) => {
  return (
    <Box>
      {status === "Paid" && (
        <Flex
          display="flex"
          align="center"
          justifyContent="center"
          gap="2"
          bgColor="green.600"
          color="green.200"
          opacity={0.9}
          w={28}
          h="10"
          borderRadius={4}
          fontWeight="semibold"
        >
          <BsFillCircleFill size={10} />
          Paid
        </Flex>
      )}
      {status === "Pending" && (
        <Flex
          display="flex"
          align="center"
          justifyContent="center"
          gap="2"
          bgColor="orange.500"
          color="orange.200"
          w={28}
          h="8"
          borderRadius={4}
          fontWeight="semibold"
        >
          <BsFillCircleFill size={10} />
          Pending
        </Flex>
      )}
      {status === "Draft" && (
        <Flex
          display="flex"
          align="center"
          justifyContent="center"
          gap="2"
          bgColor="white"
          color="gray.300"
          opacity={0.7}
          w={28}
          h="8"
          borderRadius={4}
          fontWeight="semibold"
        >
          <BsFillCircleFill size={10} />
          Draft
        </Flex>
      )}
    </Box>
  );
};

export default Status;
