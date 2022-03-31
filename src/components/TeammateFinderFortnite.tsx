import { Grid, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import fortnite from "../img/fortnite.png";
import arrowLeft from "../img/arrowLeft.png";
import { DuosIcon } from "./DuosIcon";
import { TriosIcon } from "./TriosIcon";

const FinderItem: React.FC<{ type: "duos" | "trios"; playerCount: number }> = ({ type, playerCount }) => {
   return (
      <Grid
         as={Link}
         to="list"
         templateColumns="max-content 1fr max-content"
         gap={2}
         state={{ type, playerCount }}
         w="full"
         alignItems="center"
         bg="gray.50"
         shadow="base"
         p={2}
         borderRadius="base"
         _hover={{ shadow: "lg" }}
         transition="all 0.3s">
         {type === "duos" ? (
            <>
               <DuosIcon fontSize="2rem" />
               <Text fontWeight="bold" fontSize="lg">
                  Duos
               </Text>
            </>
         ) : (
            <>
               <TriosIcon fontSize="2rem" />
               <Text fontWeight="bold" fontSize="lg">
                  Trios
               </Text>
            </>
         )}
         <Text fontWeight="bold">{playerCount}+ players</Text>
      </Grid>
   );
};

const FinderTournamentItem: React.FC<{ type: "duos" | "trios"; playerCount: number; title: string; date: string }> = ({ type, title, date, playerCount }) => {
   return (
      <Grid
         as={Link}
         to="list"
         state={{ type, playerCount }}
         templateColumns="max-content 1fr"
         gap={2}
         w="full"
         alignItems="center"
         bg="gray.50"
         shadow="base"
         p={2}
         borderRadius="base"
         _hover={{ shadow: "lg" }}
         transition="all 0.3s">
         {type === "duos" ? <DuosIcon fontSize="2rem" alignSelf="start" /> : <TriosIcon fontSize="2rem" alignSelf="start" />}
         <Grid>
            <Text fontWeight="bold" fontSize="lg">
               {title}
            </Text>
            <Text>{date}</Text>
         </Grid>
         <Text gridColumn="2 / 3" fontWeight="bold">
            {playerCount}+ players
         </Text>
      </Grid>
   );
};

export const TeammateFinderFortnite: React.FC = () => {
   return (
      <Grid alignContent="start" p={6} gap={8} justifyItems="center">
         <Text color="primary.700" fontSize="3xl" fontWeight="bold">
            Teammate Finder
         </Text>
         <Grid w="full">
            <Grid gridRow="1 / 2" gridColumn="1 / 2" justifySelf="start">
               <Link to="/teammate-finder">
                  <Image src={arrowLeft} alt="Arrow left" />
               </Link>
            </Grid>
            <Image gridRow="1 / 2" gridColumn="1 / 2" justifySelf="center" w={36} src={fortnite} alt="Fortnite" />
         </Grid>

         <VStack spacing={3} w="full">
            <FinderItem type="duos" playerCount={2400} />
            <FinderItem type="trios" playerCount={1600} />
         </VStack>
         <Grid gap={3} w="full">
            <Text fontWeight="bold" fontSize="lg">
               For Event
            </Text>
            <VStack spacing={3} w="full">
               <FinderTournamentItem type="trios" title="Trios Cash Cup" date="May 12, 2021 5PM-8PM" playerCount={2200} />
               <FinderTournamentItem type="trios" title="Trio Contender Cup" date="May 12, 2021 5PM-8PM" playerCount={200} />
               <FinderTournamentItem type="duos" title="Duo Cash Cup" date="May 12, 2021 5PM-8PM" playerCount={1200} />
            </VStack>
         </Grid>
      </Grid>
   );
};
