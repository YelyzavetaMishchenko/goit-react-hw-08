import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
        )}
      </div>

      {!isLoggedIn && (
        <div className={styles.right}>
          <NavLink to="/register" className={styles.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={styles.link}>
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
}
