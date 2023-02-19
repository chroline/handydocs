import { AppProps } from "next/app";
import dynamic from "next/dynamic";

import "../../styles/main.scss";

const AppWrapper = dynamic(() => import("~/components/AppWrapper"));

console.log("oh hi");
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
