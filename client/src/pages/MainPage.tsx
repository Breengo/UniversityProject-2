import React from "react";
import { Link } from "react-router-dom";
import AuthWindow from "../components/AuthWindow";

const MainPage: React.FC = () => {
  const [showAuth, setShowAuth] = React.useState(false);
  const directorId = 5;
  return (
    <div className="w-screen h-screen bg-purple-400 flex items-center justify-center">
      <div className="flex flex-col bg-purple-600 rounded-xl">
        <h1 className="text-white text-3xl p-4 font-bold">
          Choose your position
        </h1>
        <Link
          to="/choose_manager"
          className="text-white text-xl py-4 px-8 text-center border-t-2 border-purple-400 cursor-pointer hover:bg-purple-700"
        >
          Manager
        </Link>
        <Link
          to="/choose_seller"
          className="text-white text-xl py-4 px-8 text-center border-t-2 border-purple-400 cursor-pointer hover:bg-purple-700"
        >
          Seller
        </Link>
        <div
          onClick={() => setShowAuth(true)}
          className="text-white text-xl py-4 px-8 text-center border-t-2 border-purple-400 cursor-pointer hover:bg-purple-700 rounded-b-xl"
        >
          Director
        </div>
      </div>
      {showAuth && <AuthWindow id={directorId} position={"Director"} />}
    </div>
  );
};

export default MainPage;
