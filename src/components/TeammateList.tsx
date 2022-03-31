import {
   Avatar,
   Button,
   Grid,
   HStack,
   Image,
   Menu,
   MenuButton,
   MenuItemOption,
   MenuList,
   MenuOptionGroup,
   Text,
   useDisclosure,
   VStack,
} from '@chakra-ui/react';
import { Link, useLocation } from 'react-router-dom';
import { DuosIcon } from './DuosIcon';
import { ChevronDownIcon } from './ChevronDownIcon';
import { TeammateModal } from './TeammateModal';
import { useAppContext } from '../AppContext';
import { TriosIcon } from './TriosIcon';
import fortnite from '../img/fortnite.png';
import arrowLeft from '../img/arrowLeft.png';
import { useState } from 'react';

export enum Role {
   INGAMELEADER = 'In-Game Leader',
   FRAGGER = 'Fragger',
   SUPPORT = 'Support',
   TARPER = 'Tarper',
}

const TEAMMATES: TeammateItemProps[] = [
   {
      name: 'TimTheTatman',
      role: Role.SUPPORT,
      vouches: 120,
      arenaPoints: 2340,
   },
   {
      name: 'Tfue',
      role: Role.FRAGGER,
      vouches: 234,
      arenaPoints: 12520,
   },
   {
      name: 'Stretch',
      role: Role.INGAMELEADER,
      vouches: 30,
      arenaPoints: 32520,
   },
   {
      name: 'Cloakzy',
      role: Role.TARPER,
      vouches: 104,
      arenaPoints: 8654,
   },
];

export interface TeammateItemProps {
   name: string;
   role: Role;
   vouches: number;
   arenaPoints: number;
}

const TeammateItem: React.FC<TeammateItemProps> = ({ name, role, vouches, arenaPoints }) => {
   const { isOpen, onClose, onOpen } = useDisclosure();
   const { vouchedPlayers } = useAppContext();
   const vouched = vouchedPlayers.includes(name);

   return (
      <>
         <Grid onClick={onOpen} w='full' bg='gray.light' shadow='base' p={2} gap={2} borderRadius='base' _hover={{ shadow: 'lg' }} transition='all 0.3s'>
            <Grid templateColumns='max-content 1fr max-content' gap={3} alignItems='center'>
               <Avatar w={8} h={8} />
               <Text fontWeight='bold'>{name}</Text>
               <Text fontWeight='bold'>{role}</Text>
            </Grid>
            <Grid>
               <Text fontSize='sm'>Billy and {vouches + (vouched ? 1 : 0)} others vouch</Text>
               <Text fontSize='sm'>Arena Pts: {arenaPoints}</Text>
            </Grid>
         </Grid>
         <TeammateModal isOpen={isOpen} onClose={onClose} {...{ name, role, vouches, arenaPoints }} />
      </>
   );
};

export const TeammateList: React.FC = () => {
   const { state } = useLocation() as any;

   const [sort, setSort] = useState<string>();
   const [role, setRole] = useState<string>();

   const isDuos = state?.type === 'duos';

   let teammates = [...TEAMMATES];

   if (sort === 'Arena Points') teammates = teammates.sort((teammateA, teammateB) => teammateB.arenaPoints - teammateA.arenaPoints);
   else if (sort === 'Vouches') teammates = teammates.sort((teammateA, teammateB) => teammateB.vouches - teammateA.vouches);

   if (role && role !== 'ALL') teammates = teammates.filter((teammate) => teammate.role === role);

   return (
      <Grid alignContent='start' p={6} gap={4}>
         <Text color='primary.700' fontSize='3xl' fontWeight='bold' textAlign='center'>
            Teammate Finder
         </Text>
         <Grid mt={4}>
            <Grid gridRow='1 / 2' gridColumn='1 / 2' justifySelf='start'>
               <Link to='/teammate-finder/fortnite'>
                  <Image src={arrowLeft} alt='Arrow left' />
               </Link>
            </Grid>
            <Image gridRow='1 / 2' gridColumn='1 / 2' justifySelf='center' w={36} src={fortnite} alt='Fortnite' />
         </Grid>
         <Grid templateColumns='max-content 1fr max-content' alignItems='center' gap={3}>
            {isDuos ? <DuosIcon fontSize='3rem' /> : <TriosIcon fontSize='3rem' />}
            <Text fontSize='2xl' fontWeight='bold'>
               {isDuos ? 'Duos' : 'Trios'}
            </Text>
            <Text fontSize='lg' fontWeight='bold'>
               {state?.playerCount ? state.playerCount : 2350}+ players
            </Text>
         </Grid>
         <HStack spacing={4}>
            <Menu>
               <MenuButton as={Button} variant='white' rightIcon={<ChevronDownIcon />}>
                  Role
               </MenuButton>
               <MenuList minWidth='240px'>
                  <MenuOptionGroup type='radio' defaultValue='ALL' onChange={(e) => setRole(e as string)}>
                     <MenuItemOption value={'ALL'}>All Roles</MenuItemOption>
                     <MenuItemOption value={Role.INGAMELEADER}>In-Game Leader</MenuItemOption>
                     <MenuItemOption value={Role.FRAGGER}>Fragger</MenuItemOption>
                     <MenuItemOption value={Role.SUPPORT}>Support</MenuItemOption>
                     <MenuItemOption value={Role.TARPER}>Tarper</MenuItemOption>
                  </MenuOptionGroup>
               </MenuList>
            </Menu>
            <Menu>
               <MenuButton as={Button} variant='white' rightIcon={<ChevronDownIcon />}>
                  Sort By:
               </MenuButton>
               <MenuList minWidth='240px'>
                  <MenuOptionGroup type='radio' onChange={(e) => setSort(e as string)}>
                     <MenuItemOption value='Arena Points'>Arena Points</MenuItemOption>
                     <MenuItemOption value='Vouches'>Vouches</MenuItemOption>
                  </MenuOptionGroup>
               </MenuList>
            </Menu>
         </HStack>
         <VStack spacing={4}>
            {teammates.map((teammate, index) => (
               <TeammateItem key={index} {...teammate} />
            ))}
         </VStack>
      </Grid>
   );
};
