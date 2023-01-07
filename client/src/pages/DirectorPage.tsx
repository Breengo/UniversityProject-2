import React from "react";
import axios from "../axios";
import BackButton from "../components/BackButton";
import ItemHistoryBox from "../components/ItemHistoryBox";

interface IItemHistoryInfo {
  createdAt: string;
  employeeId: number;
  itemId: number;
  id: number;
  quantity: number;
}

const DirectorPage = () => {
  const [sellList, setSellList] = React.useState<IItemHistoryInfo[]>([]);
  const [orderList, setOrderList] = React.useState<IItemHistoryInfo[]>([]);
  React.useEffect(() => {
    axios.get("/sell/list").then((res) => setSellList(res.data));
    axios.get("/shipment/list").then((res) => setOrderList(res.data));
  }, []);
  return (
    <div className="bg-red-300 w-full min-h-screen flex justify-center text-center">
      <BackButton />
      <div className="flex-col flex bg-red-400 text-white m-8 w-4/12 rounded-xl h-fit">
        <h1 className="font-bold text-2xl p-4 border-b-2 border-red-300">
          Sells
        </h1>
        <div className="flex border-b-2 border-red-300">
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            ID
          </h1>
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            Item ID
          </h1>
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            Quantity
          </h1>
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            Seller
          </h1>
          <h1 className="p-4 text-center w-2/6">Date</h1>
        </div>
        {sellList[0] &&
          sellList.map((item) => (
            <ItemHistoryBox
              key={item.id}
              id={item.id}
              date={item.createdAt}
              employee={item.employeeId}
              itemId={item.itemId}
              quantity={item.quantity}
            />
          ))}
      </div>
      <div className="flex-col flex bg-red-400 text-white m-8 w-4/12 rounded-xl h-fit">
        <h1 className="font-bold text-2xl p-4 border-b-2 border-red-300">
          Shipments
        </h1>
        <div className="flex justify-evenly border-b-2 border-red-300">
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            ID
          </h1>
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            Item ID
          </h1>
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            Quantity
          </h1>
          <h1 className="p-4 border-r-2 border-red-300 text-center w-1/6">
            Manager
          </h1>
          <h1 className="p-4 text-center w-2/6">Date</h1>
        </div>
        {orderList[0] &&
          orderList.map((item) => (
            <ItemHistoryBox
              key={item.id}
              id={item.id}
              date={item.createdAt}
              employee={item.employeeId}
              itemId={item.itemId}
              quantity={item.quantity}
            />
          ))}
      </div>
    </div>
  );
};

export default DirectorPage;
