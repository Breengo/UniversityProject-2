import React from "react";
import { useParams } from "react-router-dom";
import axios from "../axios";
interface IItemInfo {
  role: "Manager" | "Seller";
  id: number;
  description: string;
  maker: string;
  price: number;
  quantity: number;
  name: string;
}

const ItemBox: React.FC<IItemInfo> = (ItemInfo) => {
  const sellQuantityRef = React.useRef<HTMLInputElement>(null);
  const orderQuantityRef = React.useRef<HTMLInputElement>(null);
  const [error, setError] = React.useState("");
  const [itemQuantity, setItemQuantity] = React.useState(ItemInfo.quantity);
  const employeeId = useParams().id;
  const sellHandler = () => {
    setError("");
    if (
      Number(sellQuantityRef.current?.value) === 0 ||
      Number(sellQuantityRef.current?.value) > ItemInfo.quantity ||
      sellQuantityRef.current?.value === "" ||
      isNaN(Number(sellQuantityRef.current?.value))
    ) {
      setError("Incorrect number");
    } else {
      if (sellQuantityRef.current)
        axios
          .put(
            `/item/sell_items?id=${ItemInfo.id}&quantity=${sellQuantityRef.current.value}&employeeId=${employeeId}`
          )
          .then((res) => setItemQuantity((prev) => prev - res.data.quantity));
    }
  };

  const orderHandler = () => {
    setError("");
    if (
      Number(orderQuantityRef.current?.value) === 0 ||
      orderQuantityRef.current?.value === "" ||
      isNaN(Number(orderQuantityRef.current?.value))
    ) {
      setError("Incorrect number");
    } else {
      if (orderQuantityRef.current)
        axios
          .put(
            `/item/ship_items?id=${ItemInfo.id}&quantity=${orderQuantityRef.current.value}&employeeId=${employeeId}`
          )
          .then((res) => {
            setItemQuantity((prev) => prev + res.data.quantity);
          });
    }
  };
  return (
    <div className="flex text-white text-center items-center border-b-2 py-2 border-purple-500">
      <h2 className="bold text-lg p-2 w-1/12">{ItemInfo.id}</h2>
      <h2 className="bold text-xl p-2 w-1/12">{ItemInfo.name}</h2>
      <h3 className="text-xl p-2 w-6/12">{ItemInfo.description}</h3>
      <h3 className="text-xl p-2 w-1/12">{ItemInfo.maker}</h3>
      <h3 className="text-xl p-2 w-1/12">{ItemInfo.price}</h3>
      <h3 className="text-xl p-2 w-1/12">{itemQuantity}</h3>
      {ItemInfo.role == "Seller" && (
        <div className="w-1/12 flex-col flex items-center">
          <h3 className="text-sm">{error}</h3>
          <input
            className="w-6/12 bg-purple-700 outline-none rounded-xl text-center border-2"
            type="text"
            ref={sellQuantityRef}
          />
          <button
            onClick={sellHandler}
            className="mt-2 font-bold w-6/12 bg-pink-500 rounded-xl"
          >
            Sell
          </button>
        </div>
      )}
      {ItemInfo.role == "Manager" && (
        <div className="w-1/12 flex-col flex items-center">
          <h3 className="text-sm">{error}</h3>
          <input
            className="w-6/12 bg-purple-700 outline-none rounded-xl text-center border-2"
            type="text"
            ref={orderQuantityRef}
          />
          <button
            onClick={orderHandler}
            className="mt-2 font-bold w-6/12 bg-blue-500 rounded-xl"
          >
            Order
          </button>
        </div>
      )}
    </div>
  );
};

export default ItemBox;
