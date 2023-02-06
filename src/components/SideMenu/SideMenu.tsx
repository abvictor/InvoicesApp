import { Box, Text, Stack } from "@chakra-ui/react";
import { Sun } from "phosphor-react";
import Avatar from "boring-avatars";
import Logo from "../Logo/Logo";

const SideMenu = () => {
  return (
    <Box
      bgColor="gray.700"
      w={["100%", "32"]}
      h={[32, "100vh"]}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
    >
      <Logo />
      <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" mb={8}>
        <Stack mb={4} display="flex" justifyItems="center" alignItems="center">
          <Avatar
            size={40}
            name="Helen Keller"
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <Text fontSize="2xl">Autor</Text>
        </Stack>
        <Text>Light mode</Text>
        <Sun size={32} />
      </Box>
    </Box>
  );
};

export default SideMenu;
