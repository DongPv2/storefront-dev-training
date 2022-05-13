import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";
import ContextProvider from "../contexts/contextGlobal";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const handleRouteChange = () => {
      try {
        setProgress(30);
      } catch (err) {}
    };

    const handleRouteComplete = () => {
      try {
        setProgress(100);
      } catch (err) {}
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
      router.events.off("routeChangeComplete", handleRouteComplete);

      try {
        setProgress(100);
      } catch (err) {}
    };
  }, [router.events]);

  return (
    <>
      <LoadingBar color={"red"} progress={progress} waitingTime={300} />
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  );
}

export default MyApp;
