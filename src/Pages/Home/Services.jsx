import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <div className="space-y-3 text-center mt-5">
        <h2 className="font-bold text-[#FF3811]  ">Service</h2>
        <h2 className="font-bold text-4xl ">Our Service Area</h2>
        <p className="lg:w-[717px] lg:mx-auto text-sm lg:text-xl ">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 my-5 grid-cols-1">
        {
          services.map(service=><ServiceCard
           service={service}
           key={service._id}
          ></ServiceCard>)
        }
      </div>

      

 
    </>
  );
};

export default Services;
