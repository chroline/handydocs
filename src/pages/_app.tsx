import { AppProps } from "next/app";
import dynamic from "next/dynamic";

import "../../styles/main.scss";
import { geist } from "~/util/fonts";

const AppWrapper = dynamic(() => import("~/components/AppWrapper"));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <style jsx global>
        {`
          :root {
            --font-sans: ${geist.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;
