import { Link } from "react-router-dom";
import Button from "./Button";
import useAuthStore from "../store/useAuthStore";
import deleteCookie from "../utils/delete-cookie";
import "./Sidebar.css";

export default function Sidebar() {
  const { user, setUser } = useAuthStore();

  const handleLogout = () => {
    localStorage.removeItem("access-token");
    deleteCookie();
    setUser();
    window.location.reload();
  };

  return (
    <div className="sidebar">
      {/* FIXME: Fix icon */}
      <Button value="X"></Button>
      <ul className="sidebar__items">
        {user?.role === "ADMIN" && (
          <Link className="sidebar__item" to="/posts">
            새 글 쓰기
          </Link>
        )}
        {user ? (
          <Link className="sidebar__item" to="/" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link className="sidebar__item" to="/login">
            Login
          </Link>
        )}
      </ul>
    </div>
  );
}