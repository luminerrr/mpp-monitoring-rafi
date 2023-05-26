import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import SidebarChildren from "./sidebar/SidebarChildren";

export default function UserLayout({ children }){
  const sidebarData = [
    {
      name:'CII Introduction',
      url:'/introduction'
    },
    {
      name:'CII Monitor',
      url:'/monitor'
    },
    {
      name:'Vessel Tracker',
      url:'/tracker'
    },
    {
      name:'Reporting Vessel',
      url:'/report'
    },
  ]

  return (
    <Flex
      flexDir='row'
    >
      <Flex
        w="72"
        minH="100vh"
        gap="12"
        flexDir="column"
        borderRight="1px solid"
      >
        <Flex 
          alignItems="center" 
          p="4" 
          flexDir="column" 
          gap="12"
        >
          <Heading>MPP</Heading>
          {sidebarData.map((val, i) => {
            return <SidebarChildren index={i + 1} sidebarData={val} />;
          })}
        </Flex>
      </Flex>
      <Flex backgroundColor='gray.300' w='full' p='8'>
        <Box w='full' h='full' bg='white' borderRadius='8px' p='6'>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
}