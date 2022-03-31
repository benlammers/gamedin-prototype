import { Center, Grid } from "@chakra-ui/react";
import React from "react";
import { Link, To, useMatch, useResolvedPath } from "react-router-dom";
import { HomeIcon } from "./HomeIcon";
import { TeammateFinderIcon } from "./TeammateFinderIcon";
import { UserIcon } from "./UserIcon";

const NavigationItem: React.FC<{ icon: React.ReactElement; to: To }> = ({ icon, to }) => {
   let resolved = useResolvedPath(to);
   let isActive = useMatch({ path: resolved.pathname, end: true });

   return (
      <Center
         as={Link}
         to={to}
         p={1}
         py={2}
         borderBottom="4px solid"
         borderColor={isActive ? "primary.700" : "gray.200"}
         transition="all 0.3s"
         _hover={{ borderColor: "primary.400" }}>
         {icon}
      </Center>
   );
};

export const Navigation: React.FC = () => {
   return (
      <Grid templateColumns="1fr 1fr 1fr" borderTop="1px solid" borderColor="gray.100">
         <NavigationItem icon={<HomeIcon fontSize="4xl" />} to="/" />
         <NavigationItem icon={<TeammateFinderIcon fontSize="4xl" />} to="/teammate-finder" />
         <NavigationItem icon={<UserIcon fontSize="4xl" />} to="/profile" />
      </Grid>
   );
};
