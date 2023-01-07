interface IItemHistoryInfo {
  id: number;
  itemId: number;
  quantity: number;
  employee: number;
  date: string;
}

const ItemHistoryBox: React.FC<IItemHistoryInfo> = (itemHistory) => {
  return (
    <div className="flex justify-evenly border-b-2 border-red-300">
      <h1 className="p-4 text-center w-1/6">{itemHistory.id}</h1>
      <h1 className="p-4 text-center w-1/6">{itemHistory.itemId}</h1>
      <h1 className="p-4 text-center w-1/6">{itemHistory.quantity}</h1>
      <h1 className="p-4 text-center w-1/6">{itemHistory.employee}</h1>
      <h1 className="p-4 text-center w-2/6 flex flex-col">
        {`Date: ${itemHistory.date.slice(0, 10)}`}{" "}
        <span>{`Time: ${itemHistory.date.slice(11, 19)}`}</span>{" "}
      </h1>
    </div>
  );
};

export default ItemHistoryBox;
