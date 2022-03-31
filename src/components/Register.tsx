import { Button, FormLabel, Grid, Image, Input, InputGroup, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import google from "../img/google.png";

export const Register: React.FC = () => {
   const navigate = useNavigate();
   const { closeRegister } = useAppContext();

   const handleRegister = () => {
      navigate("/profile");
      closeRegister();
   };

   return (
      <Grid zIndex="modal" height="100%" width="100%" position="absolute" top={0} left={0} bg="white" justifyItems="center" alignContent="center">
         <Grid gap={12} pb={12} onClick={handleRegister}>
            <Text fontSize="3xl" fontWeight="bold" color="primary.700" textAlign="center">
               Register
            </Text>
            <Grid w="16rem" gap={3}>
               <InputGroup display="grid" gridTemplateRows="max-content max-content">
                  <FormLabel>Display Name</FormLabel>
                  <Input placeholder="Display Name" />
               </InputGroup>
               <InputGroup display="grid" gridTemplateRows="max-content max-content">
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="Email" />
               </InputGroup>
               <InputGroup display="grid" gridTemplateRows="max-content max-content">
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Password" />
               </InputGroup>
               <Button mt={2}>Register</Button>
            </Grid>
            <Text textAlign="center" fontWeight="bold" fontSize="2xl">
               OR
            </Text>
            <Image _hover={{ opacity: 0.9 }} transition="all 0.3s" cursor="pointer" src={google} alt="Google" w="16rem" />
         </Grid>
      </Grid>
   );
};
