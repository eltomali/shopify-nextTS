import "@assets/main.css";
import { AppProps } from "next/app";
import { FunctionComponent } from "react";

const Noop: FunctionComponent = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FunctionComponent } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
