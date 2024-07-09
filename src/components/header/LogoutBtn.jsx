import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSclice";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    authService.logout().then(() => dispatch(logout()));
  };
  return (
    <button
      className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
      onClick={handleLogout}
    >
      logout
    </button>
  );
};

export default LogoutBtn;
