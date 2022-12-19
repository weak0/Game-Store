import { Routes, Route } from "react-router-dom";
import "./App.css";
import GamePage from "./components/Games/GamePage";
import HomePage from "./components/HomePage/HomePage";
import Store from "./components/Store/Store";
import ErorrPage from "./components/UI/404page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<Store />} />
        <Route path="/game/:dbkey/:id" element={<GamePage />} />
        <Route path="*" element={<ErorrPage/>} />
      </Routes>
    </div>
  );
}

export default App;
