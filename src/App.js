import "./index.css";
import Venues from "./pages/Venues.js";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="venues" element={<Venues />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
