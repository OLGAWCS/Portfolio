import Head from "next/head";
import React from "react";
import Hello from "@/components/hello";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web developer portfolio</title>
        <meta name="title" content="Web Developer portfolio Website" />
      </Head>
      <Hello />
    </>
  );
}
