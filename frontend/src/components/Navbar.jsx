import { FaArrowRightFromBracket, FaListCheck } from "react-icons/fa6";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { logout } = useAuthStore();

  return (
    <nav className="w-[80%] max-md:w-[90%] m-auto h-14 flex items-center justify-between bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-2 text-blue-600 font-bold text-xl">
        <FaListCheck />
        <span>Todo</span>
      </div>

      {/* Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-2 text-red-500 hover:text-red-600 text-sm font-medium"
      >
        <FaArrowRightFromBracket />
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
