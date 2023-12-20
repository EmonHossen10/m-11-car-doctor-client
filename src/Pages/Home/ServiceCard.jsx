import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  // console.log(Object.keys(service).join(","))
  const { _id, service_id, title, img, price, description, facility } = service;
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
          <FaArrowRightLong className="text-[#FF3811]"></FaArrowRightLong>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
