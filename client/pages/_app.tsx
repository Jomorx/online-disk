import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "normalize.css";
import { MoLayout } from "@/layouts/MoLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MoLayout>
      <Component {...pageProps} />
    </MoLayout>
  );
}
