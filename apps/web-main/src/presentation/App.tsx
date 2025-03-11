import { Box } from "@repo/ui/MaterialUI";
import Footer from "../../../../libs/ui/src/core/Footer";
import { Header } from "../../../../libs/ui/src/core/Header";
import { Catalogues } from "./components/Catalogues";
// import "./App.css";

function App() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                pt: 8,
            }}
        >
            <Header />
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Catalogues />
            </Box>
            <Footer />
        </Box>
    );
}

export default App;
