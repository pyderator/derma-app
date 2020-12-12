import Head from "next/head";
import Layout from "../layout/layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Grand Skin Care Center</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "200vh" }}></main>
    </Layout>
  );
}
