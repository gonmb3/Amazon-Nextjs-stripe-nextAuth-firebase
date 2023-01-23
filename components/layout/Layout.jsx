import Head from "next/head";
import React from "react";
import Header from "../Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>Amazon - {title} </title>
      </Head>

      <Header />
      <main className="max-w-screen-2xl mx-auto ">
        {children}
       </main>
    </>
  );
};

export default Layout;
