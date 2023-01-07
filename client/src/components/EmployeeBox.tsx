import { Link } from "react-router-dom";

interface IEmployeInfo {
  last: boolean;
  role: "Manager" | "Seller";
  id: number;
  name: string;
  gender: "M" | "F";
  address: string;
}

const EmployeeBox: React.FC<IEmployeInfo> = (EmployeInfo) => {
  return (
    <Link
      to={
        EmployeInfo.role === "Seller"
          ? `/seller/${EmployeInfo.id}`
          : `/manager/${EmployeInfo.id}`
      }
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
    </Link>
  );
};

export default EmployeeBox;
