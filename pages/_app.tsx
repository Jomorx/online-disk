import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "normalize.css";
import { MoLayout } from "@/layouts/MoLayout";
import { store } from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MoLayout>
        <Component {...pageProps} />
      </MoLayout>
    </Provider>
  );
}
