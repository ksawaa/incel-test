import React from "react";
import NextLink from "next/link";
import {
  Heading,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <>
      <Heading
        fontWeight={600}
        fontSize={{ base: "4xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        <NextLink href="/" passHref>
          <ChakraLink as="a">
            インセル診断
          </ChakraLink>
        </NextLink>
      </Heading>
      <Text color={"gray.500"}>
        あなたはチャドですか、それともベータですか？
      </Text>
    </>
  );
};

export default Header;