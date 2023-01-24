import React from "react";
import axios from "../axios";
import BackButton from "../components/BackButton";
import AuthWindow from "../components/AuthWindow";
import EmployeeBox from "../components/EmployeeBox";

export interface IEmployeeInfo {
  id: number;
  address: string;
  createdAt: string;
  gender: "M" | "F";
  name: string;
  position: "Manager" | "Seller";
  updatedAt: string;
}

const ChooseManagerPage = () => {
  const [managerList, setManagerList] = React.useState<IEmployeeInfo[]>([]);
  const [showAuth, setShowAuth] = React.useState(false);
  const [authId, setAuthId] = React.useState(0);
  React.useEffect(() => {
    axios
      .get("/employee/list")
      .then((res) =>
        setManagerList(
          res.data.filter((item: IEmployeeInfo) => item.position == "Manager")
        )
      );
  }, []);
  return (
    <div className="w-full min-h-screen bg-blue-400 flex items-center justify-center">
      <BackButton />
      <div className="bg-blue-500 text-white rounded-xl w-6/12">
        <h1 className="font-bold text-xl p-4 text-center border-b-2 border-blue-400">
          Managers
        </h1>
        <div className="flex text-center border-b-2 border-blue-400">
          <h2 className="w-1/5 p-4 border-r-2 border-blue-400">ID</h2>
          <h2 className="w-1/5 p-4 border-r-2 border-blue-400">Name</h2>
          <h2 className="w-1/5 p-4 border-r-2 border-blue-400">Position</h2>
          <h2 className="w-1/5 p-4 border-r-2 border-blue-400">Gender</h2>
          <h2 className="w-1/5 p-4">Adress</h2>
        </div>
        {managerList[0] &&
          managerList.map((item, index) =>
            index === managerList.length - 1 ? (
              <EmployeeBox
                key={item.id}
                {...{
                  setShowAuth,
                  setAuthId,
                  role: item.position,
                  last: true,
                  name: item.name,
                  gender: item.gender,
                  address: item.gender,
                  id: item.id,
                }}
              />
            ) : (
              <EmployeeBox
                key={item.id}
                {...{
                  setShowAuth,
                  setAuthId,
                  role: item.position,
                  last: false,
                  name: item.name,
                  gender: item.gender,
                  address: item.gender,
                  id: item.id,
                }}
              />
            )
          )}
      </div>
      {showAuth && <AuthWindow position="Manager" id={authId} />}
    </div>
  );
};

export default ChooseManagerPage;
