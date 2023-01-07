import { Link } from "react-router-dom";
const BackButton = () => {
  return (
    <Link
      to="/"
      className="fixed top-5 left-5 text-white font-bold py-2 px-4 rounded-xl border-2 border-white hover:bg-white hover:text-black"
    >
      Back
    </Link>
  );
};

export default BackButton;
