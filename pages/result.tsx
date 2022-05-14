import type { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
  Link as ChakraLink,
  Center,
  Button,
} from "@chakra-ui/react";
import script from "../script.json";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import { Quadrants } from "../components/Quadrants";
import { TwitterIcon, TwitterShareButton } from "react-share";

const Result: NextPage = () => {
  const [personalityScore, looksScore] = useScore();
  let result = {
    header: "",
    shareHeader: "",
    body: <></>,
    color: "red",
  };
  if (personalityScore == 0 && looksScore == 0) {
    result = {
      color: "bg-secondary mb-3",
      header: "あなたはジャレド・フォーグルです。",
      shareHeader: "私はジャレド・フォーグルでした！",
      body: <Image src="/jared-fogle.webp" alt="Jared Fogle thumbs-up" layout="fill" />,
    };
  } else if (personalityScore <= 0 && looksScore >= 0) {
    result = {
      color: "bg-danger mb-3",
      header: "あなたはベータ-ベータです。",
      shareHeader: "私は精神的ベータ-身体的ベータでした！",
      body: <p>あなたは見た目もベータオスですし、性格もベータオスです。つまり社会の最底辺ということです。カッテージチーズを詰めたサンドイッチの袋を少し膨らませたような体型をしており、着ているのはアニメのTシャツです。あなたはおそらく恋人がいたことがないでしょうし、いたとしても何年も前に別れている可能性が高いです。後者の場合、いまだに立ち直れてはいないでしょう。あなたはもう何ヶ月も人とコミュニケーションをとっていません。そして、あなたに残された最後の可能性は実家の子供部屋に撤退し、神様が二度目のチャンスを恵んでくれるよう願うことだけです。</p>,
    };
  } else if (personalityScore <= 0 && looksScore <= 0) {
    result = {
      color: "bg-warning mb-3",
      header: "あなたはベータ-チャドです。",
      shareHeader: "私は精神的ベータ-身体的チャドでした！",
      body: <p>あなたの見た目はチャドですが、性格がベータオスです。あなたはおそらく自分を変えようと決心し、ジムに通い始めたベータ-ベータです。あなたの肉体は大理石から彫り出したように鍛えられています、しかし、残念ながらそれは無用の長物であるとお伝えしなければなりません。服にいくらお金をかけようと、何kgのベンチを挙げようと、あなたのキモさはそのままです。スキンケア製品をどれだけ使おうと、それまで積み重ねてきたアニメの視聴回数が洗い流されることはありません。あなたの強靭な筋肉は、あなたの腐った内面に蓋をする役割しかありません。もし彼女ができたなら、あなたは常に気をつけ続けなければなりません。丸暗記しているナルトのセリフをうっかり口に滑らせたりしたならば、彼女はあなたが「バケモノ」であることに気づいてしまうでしょう。</p>,
    };
  } else if (personalityScore >= 0 && looksScore >= 0) {
    result = {
      color: "bg-info mb-3",
      header: "あなたはチャド-ベータです。",
      shareHeader: "私は精神的チャド-身体的ベータでした！",
      body: <p>あなたは見た目がベータオスですが性格がチャドです。憂うことはありません。あなたはクソデブかもしれませんが、性格がいいので人生はうまくいくでしょう。あなたはおそらくフラタニティの一員で、パーティで若い女性と言葉をかわすこともあるでしょう。あなたは性格がチャドであり、そのことは一生の助けになるでしょう。ですから、経済学部か政治学部を卒業してホワイトカラーの職を得て、ソロリティ出身の女の子と30歳で結婚して子供を作ってくださいね。子供の名前はブラッドとステイシーでしょう。</p>,
    };
  } else if (personalityScore > 0 && looksScore < 0) {
    result = {
      color: "bg-success mb-3",
      header: "あなたはチャド-チャドです。",
      shareHeader: "私は精神的チャド-身体的チャドでした！",
      body: <>
        <p>あなたは見た目もふるまい方も『Mr. Steal Your Girl』という感じです。あなたの体臭はおのずからオールドスパイス(アメリカのデオドラント製品)めいて香り、何が起ころうと、あなたのクローゼットからはヴィンヤード・ヴィンズのきれいなシャツを見つけることができます。あなたの汗はJUUL(スティック型VAPE)のフレーバーとして、尿はクラフトビールとして瓶詰めされ、販売されます。</p>
        <p>必然的な結果として、あなたはゴールドマン・サックスで投機銀行家として働くことになるでしょう。あなたは郊外にアッパーミドルの家を買い、ふさわしい相手と結婚するでしょう。あなたの息子はフットボールチームのキャプテンに選ばれるでしょうし、彼は「僕もお父さんのような人になりたいです」とスピーチするでしょう。あなたの人生はイージーモードです。でも、あなたが完璧な人生を謳歌しているとき、世界のどこかには、実家の子供部屋で日がな過ごし、チートスの粉にまみれながら、どうすれば人並みにやっていけるか理解しようと奮闘しているベータ-ベータがいることを忘れないでください。どうか、人間のうち最も持たざる者のことを気に止め、神があなたにシックス・パックとブロンド・ヘアーの形をした黄金のチケットを手渡してくれたことに感謝してください。</p>
      </>,
    };
  }
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
              spacing={4}
            >
              <Heading
                fontWeight={600}
                fontSize={{ base: "xl", sm: "2xl", md: "3xl" }}
                lineHeight={"110%"}
                color={"green.500"}
              >
                結果
              </Heading>
              <Heading
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "2xl", md: "3xl" }}
                lineHeight={"150%"}
              >
                <Text
                  as="span"
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "green.200",
                    zIndex: -1,
                  }}
                >
                  {result.header}
                </Text>
              </Heading>
              <Box
                shadow="base"
                borderWidth="1px"
                alignSelf={{ base: "center", lg: "flex-start" }}
                borderColor={"gray.200"}
                borderRadius={"xl"}
                p={{ base: 5, sm: 10 }}
              >
                <Text as="div" align="start" lineHeight={"200%"} fontSize={{ base: "md", sm: "lg" }}>{result.body}</Text>
              </Box>
            </Stack>

            <Quadrants x={personalityScore} y={looksScore} />

            <TwitterShareButton url="https://shindan.incel.jp/" title={result.shareHeader + "あなたもインセル診断をしてみよう！"}>
              <Button as="div" colorScheme="blue">
                <TwitterIcon size={32} round={true} />Twitterでシェア
              </Button>
            </TwitterShareButton>
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

export default Result;

const useScore = (): [number, number] => {
  const [personalityScore, setPersonalityScore] = useState(0);
  const [looksScore, setLooksScore] = useState(0);
  useEffect(() => {
    if (window) {
      let personalityCount = 0;
      let looksCount = 0;
      let currentPersonalityScore = 0;
      let currentLooksScore = 0;
      for (let index = 0; index < script.length; index++) {
        const item = script[index];
        const input = window.localStorage.getItem("input" + String(index + 1));
        const score = calcScore(parseInt(input || "0"), item.answers.length, item.weight);
        if (item.isLooks) {
          looksCount += item.weight;
          currentLooksScore += score;
        } else {
          personalityCount += item.weight;
          currentPersonalityScore += score;
        }
      }
      setPersonalityScore(-1 * currentPersonalityScore * (253 / personalityCount));
      setLooksScore(currentLooksScore * (253 / looksCount));
    }
  }, []);
  return [personalityScore, looksScore];
};

const calcScore = (input: number, optionNum: number, weight: number): number => {
  if ((optionNum % 2) != 0) {
    if (input < ((optionNum + 1) / 2)) {
      return calcScore(input, optionNum + 1, weight);
    } else {
      return calcScore(input + 1, optionNum + 1, weight);
    }
  } else {
    return ((input - optionNum / 2) / optionNum * 2) * weight;
  }
};
