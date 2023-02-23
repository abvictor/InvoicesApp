import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { collection, doc, getDoc } from "firebase/firestore";

import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import Status from "../components/Status/Status";
import { db } from "../firebase/config";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const docId = "3tfCGMPwr987XOp1REHK";
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchInvoice = async () => {
      const docRef = await doc(db, "invoices", docId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        console.log("deu ruim");
      }
    };

    fetchInvoice();
  }, [id]);

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
      <Box
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
          <Status status="Paid" />
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
      <Box w={730} h="44" bgColor="gray.900" mt="4" borderRadius="8">
        <Flex p="8">
          <Text color="purple.300">#</Text>
          <Text fontWeight="bold">{id}</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Details;
