import { Flex, Image } from "@chakra-ui/react";
import UserLayout from "../../components/layout/UserLayout";
import shipImg from '../../components/images/ship-img.png'

export default function Monitor() {
  return (
    <UserLayout>
      <Flex direction="column">
        <Flex
          direction="row"
          gap="4"
          verticalAlign="center"
          pt='6rem'
        >
          <Image src={shipImg} borderRadius="8px" w="700px" />
        </Flex>
      </Flex>
    </UserLayout>
  );
}