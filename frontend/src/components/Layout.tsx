import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Navbar />
    <main className="bg-red-100 min-h-screen">
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;