import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../src/components/Layout";
import { AuthProvider } from "../src/hooks/useAuth";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <RecoilRoot>
            <AuthProvider>
                <Layout>
                    <QueryClientProvider client={queryClient}>
                        <Component {...pageProps} />
                    </QueryClientProvider>
                </Layout>
            </AuthProvider>
        </RecoilRoot>
    );
}

export default MyApp;
