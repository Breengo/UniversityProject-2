import React from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import axios from "../axios";

interface IAuth {
  id: number;
  position: "Seller" | "Manager" | "Director";
}

const AuthWindow: React.FC<IAuth> = ({ id, position }) => {
  const [password, setPassword] = React.useState("");
  const [notAuth, setNotAuth] = React.useState(false);
  const navigate = useNavigate();
  const setAccesTo = React.useContext(Context);
  const onAuthHandler = async () => {
    const res = await axios.post("/employee/auth", {
      password,
      id,
    });
    if (!res.data) {
      setNotAuth(true);
    } else {
      if (position === "Director") {
        setAccesTo("Director");
        navigate("/director");
      } else {
        setAccesTo(position);
        navigate(`/${position}/${id}`);
      }
    }
  };
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-30">
      <div
        className={
          "p-8 rounded-md flex flex-col border-2" +
          (notAuth
            ? " bg-red-500 border-red-300"
            : " bg-blue-700 border-blue-400")
        }
      >
        <label className="w-full text-center text-3xl font-bold text-white mb-4">
          Password
        </label>
        <input
          className={
            "py-2 px-6 rounded-md outline-none border-2" +
            (notAuth ? " focus:border-red-400" : " focus:border-blue-400")
          }
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {notAuth && (
          <h1 className="text-center text-white text-xl my-2">
            Wrong password
          </h1>
        )}
        <button
          onClick={onAuthHandler}
          className={
            "text-white py-1 px-4 mt-4 border-white-500 border-2 rounded-md text-lg hover:bg-white " +
            (notAuth ? " hover:text-red-500" : " hover:text-blue-700")
          }
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AuthWindow;
