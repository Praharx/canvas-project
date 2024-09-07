import Head from "next/head";
import Image from "next/image";
import Board from "@/components/board";
import Score from "@/components/score";
import styles from "@/styles/index.module.css";
import { CanvasClient } from "@dscvr-one/canvas-client-sdk";
import { useEffect } from "react";
import App from "./blink"
import AppWalletProvider from "@/components/AppWalletAdapter";
import RetroArcadeNavbar from "@/components/Navbar";
import CustomTabbedSection from "@/components/Tabs";
export default function Home() {
  //is iframed

  useEffect(function onFirstMount() {
    if (window.self !== window.top) {
      const canvasClient = new CanvasClient();
    }
  }, []); // empty dependencies array means "run this once on first mount"

  return (
    <div className="w-[100vw]">
      <Head>
        <title>Who w&apos;ll win</title>
        <meta
          name="A place to argue on the most triggering opinions out there"
          content="Argue! Argue and Argue."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="90x100"
          href="apple-touch-icon.png"
        />

        <link rel="icon" type="image/png" sizes="32x32" href="favicon32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon16.png" />
        <meta property="og:image" content="/cover.png" />
        <meta property="dscvr:canvas:version" content="vNext" />
      </Head>
      <AppWalletProvider>
      <main className="w-full flex flex-col items-center mx-auto">
          <RetroArcadeNavbar/>
          <CustomTabbedSection/>
      </main>
      </AppWalletProvider>
    </div>
  );
}
