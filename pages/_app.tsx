import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/Layout";
import { AuthProvider } from "../src/hooks/useAuth";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </RecoilRoot>
  );
}

export default MyApp;
