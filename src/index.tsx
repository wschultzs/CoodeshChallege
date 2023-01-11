import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ResponsiveAppBar from "./Presentation/Layout/Navbar";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ResponsiveAppBar />
        <App />
    </React.StrictMode>
);

reportWebVitals();
