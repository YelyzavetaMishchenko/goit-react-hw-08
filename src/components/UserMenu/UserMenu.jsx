import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import styles from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <span className={styles.greeting}>Welcome, {user.name}</span>
      <button className={styles.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
