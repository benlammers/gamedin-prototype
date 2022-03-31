import { Grid, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import fortnite from '../img/fortnite.png';

export const TeammateFinder: React.FC = () => {
   return (
      <Grid alignContent='start' p={6} gap={12} justifyItems='center' pt={12}>
         <Text color='primary.700' fontSize='3xl' fontWeight='bold'>
            Teammate Finder
         </Text>
         <Grid justifyItems='center' gap={3}>
            <Text fontWeight='bold' fontSize='xl'>
               Select Game
            </Text>
            <Grid as={Link} to='fortnite' bg='gray.50' shadow='base' py={4} px={12} borderRadius='base' _hover={{ shadow: 'lg' }} transition='all 0.3s'>
               <Image w={40} src={fortnite} alt='Fortnite' />
            </Grid>
         </Grid>
      </Grid>
   );
};
