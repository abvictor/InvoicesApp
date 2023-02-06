import { Box } from "@chakra-ui/react";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Box w={["28", "32"]}>
      <img src={logo} alt="Invoice logo" />
    </Box>
  );
};

export default Logo;
