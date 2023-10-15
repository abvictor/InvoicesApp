import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import { theme } from './styles/themes.ts'

import InvoiceDetail from './pages/invoice/InvoiceDetail.tsx';
import App from './App.tsx'

import SideBar from './components/SideBar/SideBar.tsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/invoice/:id",
    element: <InvoiceDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider theme={theme}>
      <SideBar />
      <RouterProvider router={router} />
    </ChakraProvider>
)
