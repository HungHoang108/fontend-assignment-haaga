import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideBar from "./components/SideBar";
import Training from "./pages/Training";
import Customer from "./pages/Customer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/training" element={<Training />}></Route>
        <Route path="/customer" element={<Customer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
