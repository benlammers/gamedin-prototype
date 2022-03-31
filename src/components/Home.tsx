import { Button, Grid, Image, Text } from "@chakra-ui/react";
import { useAppContext } from "../AppContext";
import fortnite from "../img/fortnite.png";

export const Home: React.FC = () => {
   const { openRegister } = useAppContext();

   return (
      <Grid alignContent="center" justifyItems="center" gap={24}>
         <Text color="primary.700" fontSize="3.6rem" textTransform="uppercase" fontWeight="bold">
            GamedIn
         </Text>
         <Grid alignContent="center" justifyItems="center" gap={3}>
            <Text fontSize="lg" fontWeight="bold">
               Currently Supporting
            </Text>
            <Image src={fortnite} alt="Fortnite" w={48} />
         </Grid>
         <Button onClick={openRegister} fontSize="2xl" height={12} maxWidth={48} width={36}>
            Register
         </Button>
      </Grid>
   );
};
