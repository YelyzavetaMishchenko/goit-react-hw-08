import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";

export default function AppBar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <header
      style={{ display: "flex", justifyContent: "space-between", gap: 20 }}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
