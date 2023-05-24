import { Flex, Heading, Text } from "@chakra-ui/react";
export default function SidebarChildren({ sidebarData, index }){

  return (
    <Flex border="1px solid" flexDir="column" alignItems="center" w="60">
      <Heading>{index}</Heading>
      <Text>{sidebarData.name}</Text>
    </Flex>
  );
}