import "./assets/css/base.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./presentation/App";

createRoot(document.getElementById("root")!).render(<App />);
