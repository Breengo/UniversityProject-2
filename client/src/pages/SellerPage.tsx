import React from "react";
import axios from "../axios";
import BackButton from "../components/BackButton";
import ItemBox from "../components/ItemBox";

interface IItemInfo {
  createdAt: string;
  description: string;
  id: number;
  maker: string;
  name: string;
  price: number;
  quantity: number;
  updatedAt: string;
}

const SellerPage = () => {
  const [itemList, setItemList] = React.useState<IItemInfo[]>([]);
  React.useEffect(() => {
    axios.get("/item/list").then((res) => setItemList(res.data));
  }, []);
  return (
    <div className="w-full min-h-screen bg-purple-400 flex items-center justify-center py-20">
      <BackButton />
      <div className="flex flex-col bg-purple-600 rounded-xl w-10/12 py-2 pb-4">
        <h1 className="text-white text-3xl p-4 font-bold text-center">Items</h1>
        <div className="flex text-white font-bold text-center border-t-2 border-purple-500 border-b-2 border-purple-500 my-4">
          <h1 className="p-2 w-1/12 border-r-2 border-purple-500">ID</h1>
          <h1 className="p-2 w-1/12 border-r-2 border-purple-500">Name</h1>
          <h1 className="p-2 w-6/12 border-r-2 border-purple-500">
            Description
          </h1>
          <h1 className="p-2 w-1/12 border-r-2 border-purple-500">Maker</h1>
          <h1 className="p-2 w-1/12 border-r-2 border-purple-500">Price</h1>
          <h1 className="p-2 w-1/12 border-r-2 border-purple-500">Quantity</h1>
          <h1 className="p-2 w-1/12">Functions</h1>
        </div>
        {itemList[0] &&
          itemList.map((item) => (
            <ItemBox
              key={item.id}
              {...{
                role: "Seller",
                quantity: item.quantity,
                id: item.id,
                description: item.description,
                maker: item.maker,
                price: item.price,
                name: item.name,
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default SellerPage;
