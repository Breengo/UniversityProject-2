import React from "react";
import { Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import ManagerPage from "./pages/ManagerPage";
import SellerPage from "./pages/SellerPage";
import DirectorPage from "./pages/DirectorPage";
import ChooseSellerPage from "./pages/ChooseSellerPage";
import ChooseManagerPage from "./pages/ChooseManagerPage";
import ProtectedRoute from "./utils/ProtectedRoute";

export const Context = React.createContext<any | null>(null);

function App() {
  const [accesTo, setAccesTo] = React.useState("");
  return (
    <Context.Provider value={setAccesTo}>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            element={
              <ProtectedRoute isAllowed={accesTo === "Manager"} redirect="/" />
            }
          >
            <Route path="/manager/:id" element={<ManagerPage />} />
          </Route>
          <Route
            element={
              <ProtectedRoute isAllowed={accesTo === "Director"} redirect="/" />
            }
          >
            <Route path="/director" element={<DirectorPage />} />
          </Route>
          <Route
            element={
              <ProtectedRoute isAllowed={accesTo === "Seller"} redirect="/" />
            }
          >
            <Route path="/seller/:id" element={<SellerPage />} />
          </Route>
          <Route path="/choose_seller" element={<ChooseSellerPage />} />
          <Route path="/choose_manager" element={<ChooseManagerPage />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
