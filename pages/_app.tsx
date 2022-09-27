import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </RecoilRoot>
  );
}

export default MyApp;
