import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ManagerPage from "./pages/ManagerPage";
import SellerPage from "./pages/SellerPage";
import DirectorPage from "./pages/DirectorPage";
import ChooseSellerPage from "./pages/ChooseSellerPage";
import ChooseManagerPage from "./pages/ChooseManagerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/manager/:id" element={<ManagerPage />} />
        <Route path="/director" element={<DirectorPage />} />
        <Route path="/seller/:id" element={<SellerPage />} />
        <Route path="/choose_seller" element={<ChooseSellerPage />} />
        <Route path="/choose_manager" element={<ChooseManagerPage />} />
      </Routes>
    </div>
  );
}

export default App;
