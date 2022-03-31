import { Button, FormLabel, Grid, Image, Input, InputGroup } from "@chakra-ui/react";
import { useAppContext } from "../AppContext";
import discord from "../img/discord.png";

export const ConnectDiscord: React.FC = () => {
   const { closeDiscord, connectToDiscord } = useAppContext();

   const handleConnect = () => {
      connectToDiscord();
      closeDiscord();
   };

   return (
      <Grid zIndex="modal" height="100%" width="100%" position="absolute" top={0} left={0} bg="white" justifyItems="center" alignContent="center" gap={12} pb={24}>
         <Image src={discord} alt="Discord" w="16rem" />
         <Grid w="16rem" gap={3} onClick={handleConnect}>
            <InputGroup display="grid" gridTemplateRows="max-content max-content">
               <FormLabel>Email</FormLabel>
               <Input placeholder="Email" />
            </InputGroup>
            <InputGroup display="grid" gridTemplateRows="max-content max-content">
               <FormLabel>Password</FormLabel>
               <Input placeholder="Password" />
            </InputGroup>
            <Button variant="secondary" mt={2} width="full">
               Connect
            </Button>
         </Grid>
      </Grid>
   );
};
