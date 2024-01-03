import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";

const Popular = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h2 className="text-[#FF3811] font-bold text-center text-2xl">
        Popular Products
      </h2>
      <h3 className="text-5xl text-center my-2 font-bold ">
        Browse Our Products
      </h3>
      <p className="lg:w-[717px] mx-auto text-center py-2">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.{" "}
      </p>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-10 ">
        {data.map((item) => (
          <PopularCard item={item} key={item.id}></PopularCard>
        ))}
      </section>
      <div className="text-center mb-5">
        <button className="btn btn-outline text-[#FF3811]   hover:bg-[#FF3811] hover:border-0 border-1 border-[#FF3811]">
          More Products
        </button>
      </div>
    </>
  );
};

export default Popular;
