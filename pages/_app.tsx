import type { AppProps } from "next/app";
import GameProvider from "@/context/game-context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-[50vh] h-[50vh]">
      <Component {...pageProps} />
    </div>
  );
}
