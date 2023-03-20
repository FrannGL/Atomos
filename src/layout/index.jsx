import NavBar from "../components/NavBar";

import { Outlet as Page } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <NavBar />
      <Page />
    </main>
  );
}
