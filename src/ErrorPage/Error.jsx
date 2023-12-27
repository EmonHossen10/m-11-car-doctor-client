import { Link } from "react-router-dom";
 
import Lottie from 'lottie-react';
import errorImg from "./errorImage.json"


const Error = () => {
  return (
    <div className="w-[1280px] mx-auto text-center ">
     
      <Lottie  className=" w-6/12 mx-auto " animationData={errorImg} ></Lottie>
       
      <Link  to="/"> 
        
        <button className="btn btn-warning  ">Go Home</button>
      </Link>
    </div>
  );
};

export default Error;
