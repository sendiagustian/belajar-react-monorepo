import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@repo/ui/MaterialUI";
import { webMainTheme } from "@repo/ui/core/themes/WebMainTheme";
// import { BrowserRouter } from "react-router-dom";
// import AppRouter from "./presentation/AppRouter";
import App from "./presentation/App";

createRoot(document.getElementById("root")!).render(
    // <BrowserRouter>
    <ThemeProvider theme={webMainTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
    // </BrowserRouter>
);
