import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";

const Main = () => {
  return (
    <div>
      <section className="lg:w-[1280px] w-11/12 mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Main;
