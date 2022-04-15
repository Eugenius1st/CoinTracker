import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";
import Coin from "./routes/Coin";
import Menu from "./routes/Menu";

export default function Router() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/:coinId/*" element={<Coin />} />
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </BrowserRouter>
    );
}
