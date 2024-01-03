import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  // console.log(Object.keys(service).join(","))
  const { _id, title, img, price } = service;
  // console.log(service)
  return (
    <div className="card   bg-base-100 shadow-2xl ">
      <figure className="px-5 pt-5">
        <img src={img} alt="Shoes" className="rounded-xl  " />
      </figure>
      <div className="card-body   ">
        <h2 className="card-title font-bold">{title}</h2>
        <div className="flex mt-3 items-center">
          <p className="text-xl text-[#FF3811] font-semibold">
            Price :${price}
          </p>
          <Link to={`/checkout/${_id}`}>
            <FaArrowRightLong className="text-[#FF3811]"></FaArrowRightLong>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
