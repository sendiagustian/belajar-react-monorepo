import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./presentation/App.tsx";
import { CssBaseline, ThemeProvider } from "@repo/ui/MaterialUI";
import { webMainTheme } from "@repo/ui/core/themes/WebMainTheme";

createRoot(document.getElementById("root")!).render(
    <ThemeProvider theme={webMainTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);
