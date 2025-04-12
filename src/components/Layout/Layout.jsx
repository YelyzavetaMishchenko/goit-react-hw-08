import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

export default function Layout() {
  return (
    <div style={{ padding: 20 }}>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
