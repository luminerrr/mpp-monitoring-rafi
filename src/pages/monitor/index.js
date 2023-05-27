import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";
import UserLayout from "../../components/layout/UserLayout";
import shipImg from '../../components/images/ship-img.png'
import Graph, { CIIGraph } from "../../components/graph";

export default function Monitor() {
  return (
    <UserLayout>
      <Flex direction="column">
        {/* <Flex
          direction="row"
          gap="4"
          verticalAlign="center"
          pt='6rem'
        > */}
        <SimpleGrid columns={2}>
          <Box>
            <Image src={shipImg} borderRadius="8px" w="700px" />
          </Box>
          <Box>
            <CIIGraph />
          </Box>
        </SimpleGrid>

        {/* </Flex> */}
      </Flex>
    </UserLayout>
  );
}