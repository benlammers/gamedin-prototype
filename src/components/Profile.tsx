import { Avatar, Button, FormLabel, Grid, HStack, Image, InputGroup, Select, Text } from '@chakra-ui/react';
import { useAppContext } from '../AppContext';
import discordLogo from '../img/discordLogo.svg';
import epicLogo from '../img/epicLogo.svg';
import fortnite from '../img/fortnite.png';

const DiscordButton: React.FC = () => {
   const { discordConnected, openDiscord } = useAppContext();

   if (discordConnected)
      return (
         <Button p={5} variant='secondary' leftIcon={<Image src={discordLogo} w={6} alt='Discord' />}>
            timmy#2053
         </Button>
      );

   return (
      <Button onClick={openDiscord} p={5} variant='secondary' rightIcon={<Image src={discordLogo} w={6} alt='Discord' />}>
         Connect Discord
      </Button>
   );
};

const EpicData: React.FC = () => {
   const { epicConnected, openEpic } = useAppContext();

   if (epicConnected)
      return (
         <Grid>
            <Text fontWeight='bold' fontSize='xl' display='grid' gridTemplateColumns='max-content max-content' gap={3} alignItems='center'>
               Stats <Image src={epicLogo} alt='Epic' w={5} />
            </Text>
            <Text>Timmy</Text>
            <HStack mt={2} spacing={6}>
               <Text>
                  <strong>Arena Points:</strong> 5302
               </Text>
               <Text>
                  <strong>K/D:</strong> 1.4
               </Text>
            </HStack>
         </Grid>
      );

   return (
      <Grid gap={2}>
         <Text fontWeight='bold'>Stats</Text>
         <Button p={5} variant='secondary' onClick={openEpic} rightIcon={<Image src={epicLogo} w={6} alt='Epic' />}>
            Connect Epic Games
         </Button>
      </Grid>
   );
};

export const Profile: React.FC = () => {
   return (
      <Grid alignContent='start' p={6} gap={6}>
         <HStack spacing={4}>
            <Avatar h={10} w={10} />
            <Text fontWeight='bold' fontSize='2xl'>
               Timmy
            </Text>
         </HStack>
         <DiscordButton />
         <Grid gap={3}>
            <Image w={24} src={fortnite} alt='Fortnite' />
            <InputGroup display='grid' gridTemplateRows='max-content max-content' gridGap={1}>
               <FormLabel fontSize='xl'>Role</FormLabel>
               <Select maxW={48}>
                  <option>Select your role</option>
                  <option>In-Game Leader</option>
                  <option>Fragger</option>
                  <option>Support</option>
                  <option>Tarper</option>
               </Select>
            </InputGroup>
            <EpicData />
         </Grid>
         <Grid gap={2}>
            <Text fontSize='2xl' fontWeight='bold'>
               Achievements
            </Text>
            <Text>No achievements added</Text>
         </Grid>
         <Grid gap={2}>
            <Text fontSize='2xl' fontWeight='bold'>
               Teams
            </Text>
            <Text>No current teams</Text>
         </Grid>
      </Grid>
   );
};
