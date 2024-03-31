import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import GlobalFonts from "./fonts.styles.ts";

import "./index.css";
import { NextUIProvider } from "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <GlobalFonts />
      <App />
    </NextUIProvider>
  </React.StrictMode>,
);
