import type { NextPage } from "next";
import Box from "../component/box/box";
import Layout from "../layout/layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Box height={37} width="100%" fluid background="#08f">Breadcrumbs</Box>
      </>
    </Layout>
  );
};

export default Home;
