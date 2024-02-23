import "@/styles/globals.css";
import type { AppProps } from "next/app";

import {Provider} from "react-redux"
import React from 'react';
import {store} from "@/ReduxStore/Store"

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;

  return(
    <Provider store={store}>
      <main>
        <Component {...pageProps} />
      </main>
    </Provider>
  )
}
