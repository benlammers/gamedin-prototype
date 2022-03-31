import {
   Button,
   Modal,
   ModalBody,
   ModalCloseButton,
   ModalContent,
   ModalHeader,
   ModalOverlay,
   Text,
   Image,
   Grid,
   Avatar,
   HStack,
   useToast,
} from '@chakra-ui/react';
import { TeammateItemProps } from './TeammateList';
import fortnite from '../img/fortnite.png';
import discordLogo from '../img/discordLogo.svg';
import epicLogo from '../img/epicLogo.svg';
import { useAppContext } from '../AppContext';

const VouchButton: React.FC<{ name: string }> = ({ name }) => {
   const { vouchedPlayers, addVouchedPlayer, removeVouchedPlayer } = useAppContext();
   const vouched = vouchedPlayers.includes(name);

   if (vouched)
      return (
         <Button
            p={5}
            w='full'
            variant='secondary'
            background='black'
            _hover={{ background: 'black' }}
            _active={{ background: 'black' }}
            color='white'
            onClick={() => removeVouchedPlayer(name)}
         >
            Vouched {name}
         </Button>
      );

   return (
      <Button p={5} w='full' variant='secondary' onClick={() => addVouchedPlayer(name)}>
         Vouch {name}
      </Button>
   );
};

interface TeammateModalProps extends TeammateItemProps {
   isOpen: boolean;
   onClose: () => void;
}

export const TeammateModal: React.FC<TeammateModalProps> = ({ isOpen, onClose, vouches, arenaPoints, name, role }) => {
   const toast = useToast();

   const { vouchedPlayers } = useAppContext();
   const vouched = vouchedPlayers.includes(name);

   return (
      <Modal isOpen={isOpen} onClose={onClose}>
         <ModalOverlay />
         <ModalContent w='90%' maxW='36rem'>
            <ModalHeader>
               <HStack spacing={2} justifyItems='center'>
                  <Avatar w={8} h={8} />
                  <Text>{name}</Text>
               </HStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody as={Grid} gap={3} pb={4}>
               <Text fontSize='sm'>
                  Billy and <strong>{vouches + (vouched ? 1 : 0)}</strong> others vouched
               </Text>
               <Grid>
                  <Text fontWeight='bold'>Bio</Text>
                  <Text>Looking to become a top tier player. Goal to one day become a full-time player.</Text>
               </Grid>
               <Button
                  p={5}
                  w='full'
                  variant='secondary'
                  rightIcon={<Image src={discordLogo} w={6} alt='Discord' />}
                  onClick={() =>
                     toast({
                        title: 'Message sent!',
                        description: `Your message has been sent to the ${name}.`,
                     })
                  }
               >
                  Message {name}
               </Button>
               <VouchButton name={name} />
               <Image src={fortnite} alt='Fortnite' mt={3} w={24} />
               <Grid gap={3}>
                  <Grid>
                     <Text fontWeight='bold' fontSize='xl'>
                        Role
                     </Text>
                     <Text>{role}</Text>
                  </Grid>
                  <Grid>
                     <Text fontWeight='bold' fontSize='xl' display='grid' gridTemplateColumns='max-content max-content' gap={3} alignItems='center'>
                        Stats <Image src={epicLogo} alt='Epic' w={5} />
                     </Text>
                     <Text>{name}</Text>
                     <HStack mt={2} spacing={6}>
                        <Text>
                           <strong>Arena Points:</strong> {arenaPoints}
                        </Text>
                        <Text>
                           <strong>K/D:</strong> 1.4
                        </Text>
                     </HStack>
                  </Grid>
                  <Grid gap={3}>
                     <Text fontWeight='bold' fontSize='xl'>
                        Achievements
                     </Text>
                     <Grid w='full' bg='gray.50' shadow='base' p={2} borderRadius='base' templateColumns='1fr max-content' alignItems='start'>
                        <Grid>
                           <Text fontSize='lg' fontWeight='bold'>
                              Cash Cup
                           </Text>
                           <Text>Sept. 21, 2021</Text>
                        </Grid>
                        <Grid>#254</Grid>
                     </Grid>
                  </Grid>
               </Grid>
            </ModalBody>
         </ModalContent>
      </Modal>
   );
};
