import { StrictMode } from "react";
import { renderToString } from "react-dom/server";

import { portfolioConfig } from "@/data/portfolio";
import App from "./App";

export { portfolioConfig };

export function renderApp() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
