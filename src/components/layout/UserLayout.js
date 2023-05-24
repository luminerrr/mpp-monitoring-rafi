import { Flex, Heading, Text } from "@chakra-ui/react";
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
      <Flex backgroundColor='gray.100' w='full' p='4'>
        {children}
      </Flex>
    </Flex>
  );
}