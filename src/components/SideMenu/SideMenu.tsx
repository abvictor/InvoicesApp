import { Box, Text, Stack, Flex, Divider } from "@chakra-ui/react";
import { Sun } from "phosphor-react";
import Avatar from "boring-avatars";
import Logo from "../Logo/Logo";

const SideMenu = () => {
  return (
    <Box
      bgColor="gray.800"
      borderRadius="16"
      w={["100%", "28"]}
      h={[32, "100vh"]}
      display="flex"
      flexDir={["row", "column"]}
      justifyContent="space-between"
      position="fixed"
    >
      <Logo />
      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" mb={8}>
        <Stack display="flex" justifyItems="center" alignItems="center" w="100%">
          <Sun size={32} style={{ marginBottom: "20px" }} />
          <Divider opacity={0.2} />

          <Avatar
            size={48}
            name="Helen Keller"
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default SideMenu;
