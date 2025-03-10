import "./assets/css/base.css";
import { createRoot } from "react-dom/client";
import TicTacToe from "./presentation/TicTacToe";

createRoot(document.getElementById("root")!).render(<TicTacToe />);
