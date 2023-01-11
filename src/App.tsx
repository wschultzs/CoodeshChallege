import "./App.css";
import WordsListView from "./Presentation/Words/WordsList/WordsListView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Presentation/Login/Login";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="words" element={<WordsListView />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
