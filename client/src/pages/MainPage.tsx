import { Link } from "react-router-dom";

const MainPage: React.FC = () => {
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
        <Link
          to="/director"
          className="text-white text-xl py-4 px-8 text-center border-t-2 border-purple-400 cursor-pointer hover:bg-purple-700 rounded-b-xl"
        >
          Director
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
