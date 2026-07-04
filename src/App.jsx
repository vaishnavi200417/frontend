import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;