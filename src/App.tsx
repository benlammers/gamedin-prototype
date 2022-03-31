import { Outlet } from "react-router-dom";
import { ChakraProvider, Grid } from "@chakra-ui/react";

import theme from "./theme";
import "./styles/config.css";

import { Navigation } from "./components/Navigation";
import { Register } from "./components/Register";
import { ConnectDiscord } from "./components/ConnectDiscord";
import { ConnectEpic } from "./components/ConnectEpic";
import { useAppContext } from "./AppContext";

export const App: React.FC = () => {
   const { showRegister, showDiscord, showEpic } = useAppContext();

   return (
      <ChakraProvider resetCSS theme={theme}>
         <Grid as="main" className="App" templateRows="1fr max-content" position="relative">
            <Grid overflow="auto">
               <Outlet />
            </Grid>
            <Navigation />
            {showDiscord ? <ConnectDiscord /> : null}
            {showRegister ? <Register /> : null}
            {showEpic ? <ConnectEpic /> : null}
         </Grid>
      </ChakraProvider>
   );
};
