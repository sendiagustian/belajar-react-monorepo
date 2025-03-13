// import { Catalogues } from "./components/Catalogues";
import { Catalogues } from "./components/Catalogues";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
// import "./App.css";

function App() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Main>
                <Catalogues />
            </Main>
            <Footer />
        </div>
    );
}

export default App;
