import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SideMenu from "./components/SideMenu/SideMenu";
import { theme } from "./themes/themes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SideMenu />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
