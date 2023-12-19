import { Link } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import img from "../assets/error.avif";

const Error = () => {
  return (
    <div className="w-[1280px] mx-auto text-center ">
      <Navbar></Navbar>
      <img className="w-8/12 mx-auto mt-5" src={img} alt="" />
      <Link  to="/">
       
        <button className="btn btn-warning  ">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
