import { Routes, Route } from "react-router-dom";
import "./App.css";
import GamePage from "./components/Games/GamePage";
import HomePage from "./components/HomePage/HomePage";
import Store from "./components/Store/Store";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="GameStore/" element={<HomePage />} />
        <Route path="GameStore/browse" element={<Store/>} />
        <Route path="GameStore/game" element={<GamePage/>} />
      </Routes>
    </div>
  );
}

export default App;
