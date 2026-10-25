import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./index.css";
import App from "./App";

hydrateRoot(document.getElementById("root")!,
  <StrictMode>
    <App />
  </StrictMode>,
);
