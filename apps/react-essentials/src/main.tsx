import "./assets/css/base.css";
import React from "react";
import ReactEssentials from "./presentation/ReactEssentials.tsx";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(<ReactEssentials />);
