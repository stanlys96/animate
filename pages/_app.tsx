import "../styles/globals.css";
import { AppProps } from "next/app";
import PageTransition from "@/src/components/PageTransition";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
    </>
  );
}

export default MyApp;
