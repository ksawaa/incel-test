import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Container,
  Text,
  Button,
  Stack,
  Link as ChakraLink,
  Center,
  Progress,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import script from "../../script.json";
import { useLocalStorage } from "react-use";
import Header from "../../components/Header";

const Interview: NextPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const idInt = parseInt(id);
  const [_, setValue] = useLocalStorage("input" + id, -1);
  const data = script[parseInt(id as string)];
  const handleClick = (input: number) => () => {
    // console.log(input);
    setValue(input);
    if (idInt + 1 >= script.length) {
      router.push("/result");
    } else {
      router.push("/interview/" + String(idInt + 1));
    }
  };
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
            py={{ base: 10, md: 20 }}
          >
            <Header />
            <Stack
              direction={"column"}
              spacing={3}
            >
              <Progress colorScheme='green' value={Math.floor(idInt / script.length * 100)} />

              <Text fontSize="4xl">
                <Text as="span" color="green.400">Q{id}.</Text>
                {data?.prompt}
              </Text>

              <Stack
                direction={"column"}
                spacing={3}
                align={"start"}
                position={"relative"}
                px={{ base: 5, md: 20 }}
                py={10}
                width="100%"
              >
                {data?.answers.map((answer, index) => (
                  <Button
                    fontSize={{ base: "xl", sm: "2xl" }}
                    key={index}
                    variant="outline"
                    colorScheme="green"
                    width="100%"
                    py={7}
                    onClick={handleClick(index)}
                    whiteSpace="unset"
                  >
                    <Text overflowWrap="break-word">{answer}</Text>
                  </Button>
                ))}
              </Stack>
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
    </div >
  );
};

export default Interview;
