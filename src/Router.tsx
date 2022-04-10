import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Main from "./routes/Main";
import Coin from "./routes/Coin";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:coinId" element={<Coin />} />
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}
