import { NextPage } from "next";
import React, { ReactNode } from "react";
import styles from "./layout.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Head>
        <title>Thế giới Dev Training</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header></Header>
        <Main>{children}</Main>
        <Footer></Footer>
      </div>
    </>
  );
};
export default Layout;
