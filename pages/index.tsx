import type { NextPage } from "next";
import NextLink from "next/link";
import Head from "next/head";
import {
  Box,
  Container,
  Text,
  Button,
  Stack,
  Link as ChakraLink,
  Center,
} from "@chakra-ui/react";
import Header from "../components/Header";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>インセル診断</title>
        <meta name="description" content="インセル診断サイトです。https://incel.us/ から翻訳されました。" />
      </Head>

      <main>
        <Container maxW={"3xl"}>
          <Stack
            as={Box}
            textAlign={"center"}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}
          >
            <Header />
            <Image src="/chad.jpeg" alt="" width="800" height="450" />
            <Stack
              direction={"column"}
              spacing={5}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}>
              <NextLink href="/interview/1">
                <Button
                  size="lg"
                  as="a"
                  colorScheme={"green"}
                  bg={"green.400"}
                  rounded={"full"}
                  px={6}
                  _hover={{
                    bg: "green.500",
                  }}>
                  診断を始める
                </Button>
              </NextLink>
              <Button as="a" href="https://incel.jp/" size="lg" variant={"link"} colorScheme={"blue"}>
                Learn more
              </Button>
            </Stack>
          </Stack>
        </Container>
      </main>

      <footer>
        <Container maxW={"3xl"}>
          <Center>
            このサイトは
            <ChakraLink href="https://incel.us/" isExternal>
              <Text as={"span"} color={"green.400"}>
                incel.us
              </Text>
            </ChakraLink>
            から翻訳されました。
          </Center>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
