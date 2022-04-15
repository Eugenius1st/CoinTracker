import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById("root")
);
