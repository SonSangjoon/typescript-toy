import type { NextPage } from "next";
import Head from "next/head";

import styles from "@/styles/Home.module.css";

import styled, { DefaultTheme, StyledComponent } from "styled-components";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Text disabled={false}> Main</Text>
    </div>
  );
};

export default Home;

interface TextInterface {
  disabled: boolean;
}

const Text: StyledComponent<"p", DefaultTheme, TextInterface, never> = styled.p`
  ${(props: TextInterface) =>
    props.disabled ? "color: lightgray;" : "color: var(--blue500);"};
`;
