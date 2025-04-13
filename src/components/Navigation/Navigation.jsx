import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLeft}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
        )}
      </div>
    </nav>
  );
}
