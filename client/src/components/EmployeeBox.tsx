interface IEmployeInfo {
  last: boolean;
  role: "Manager" | "Seller";
  id: number;
  name: string;
  gender: "M" | "F";
  address: string;
  setAuthId: (arg: number) => void;
  setShowAuth: (arg: boolean) => void;
}

const EmployeeBox: React.FC<IEmployeInfo> = (EmployeInfo) => {
  const onClickHandler = () => {
    EmployeInfo.setAuthId(EmployeInfo.id);
    EmployeInfo.setShowAuth(true);
  };
  return (
    <div
      onClick={onClickHandler}
      className={
        EmployeInfo.last
          ? "flex text-center cursor-pointer hover:bg-blue-600 rounded-b-xl"
          : "flex text-center cursor-pointer hover:bg-blue-600"
      }
    >
      <h2 className="w-1/5 p-4">{EmployeInfo.id}</h2>
      <h2 className="w-1/5 p-4">{EmployeInfo.name}</h2>
      <h2 className="w-1/5 p-4">{EmployeInfo.role}</h2>
      <h2 className="w-1/5 p-4">{EmployeInfo.gender}</h2>
      <h2 className="w-1/5 p-4">{EmployeInfo.address}</h2>
    </div>
  );
};

export default EmployeeBox;
