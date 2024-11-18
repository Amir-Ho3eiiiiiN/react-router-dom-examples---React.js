import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <AppNav />
      <div className="px-4 h-96">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
