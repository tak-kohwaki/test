import Head from 'next/head';
import { Container } from "@mui/material";
import { NextPage } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Top } from "../components/Top";
import { Support } from "../components/Support";
import { TopMessage } from "../components/TopMessage";
import { InfomationAll } from 'src/components/Information';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>タック電子カルテのお知らせ</title>
        <meta charSet="utf-8" />
      </Head>
      <Header />
      <Top />
      <Container fixed>
        <TopMessage />
        <InfomationAll />
        <Support />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
