import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}
