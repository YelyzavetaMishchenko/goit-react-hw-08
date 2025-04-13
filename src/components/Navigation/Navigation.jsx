import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.header}>
      <div className={css.navLeft}>
        <NavLink to="/" className={css.link}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink>
      </div>
      <div className={css.navRight}>
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
        <NavLink to="/login" className={css.link}>
          Login
        </NavLink>
      </div>
    </nav>
  );
}
