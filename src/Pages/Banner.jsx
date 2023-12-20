import img1 from "../assets/images/banner/1.jpg";
import img2 from "../assets/images/banner/2.jpg";
import img3 from "../assets/images/banner/3.jpg";
import img4 from "../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] ">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl " />
        <div className="absolute flex rounded-xl  items-center pl-12 h-full  gap-5   left-0  top-0
        bg-gradient-to-r from-[#151515] to-[#15151500] 
        ">
          <div className="text-white space-y-7">
            <h2 className="lg:text-5xl text-3xl font-bold w-2/3 lg:w-1/3 ">Affordable Price For Car Servicing</h2>
            <p  className="w-[522px] text-sm lg:text-xl "> 
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div >
              <button className="btn btn-sm lg:btn-md btn-error mr-5 ">Discover More</button>
              <button className="btn btn-sm lg:btn-md btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl " />
        <div className="absolute flex rounded-xl items-center pl-12 h-full  gap-5   left-0  top-0
        bg-gradient-to-r from-[#151515] to-[#15151500] 
        ">
          <div className="text-white space-y-7">
            <h2 className="lg:text-5xl text-3xl font-bold w-2/3 lg:w-1/3 ">Efficient Oil Change Services for Peak Engine Performance</h2>
            <p  className="w-[522px] text-sm lg:text-xl "> 
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div >
              <button className="btn btn-sm lg:btn-md btn-error mr-5 ">Discover More</button>
              <button className="btn btn-sm lg:btn-md btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl " />
        <div className="absolute flex rounded-xl items-center pl-12 h-full  gap-5   left-0  top-0
        bg-gradient-to-r from-[#151515] to-[#15151500] 
        ">
          <div className="text-white space-y-7">
            <h2 className="lg:text-5xl text-3xl font-bold w-2/3 lg:w-1/3 ">Tire Rotation and Alignment: Prolonging Tire Life</h2>
            <p className="w-[522px] text-sm lg:text-xl "> 
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div >
              <button className="btn btn-sm lg:btn-md btn-error mr-5 ">Discover More</button>
              <button className="btn btn-sm lg:btn-md btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute   flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl " />
        <div className="absolute   flex rounded-xl items-center pl-12 h-full  gap-5   left-0  top-0
        bg-gradient-to-r from-[#151515] to-[#15151500] 
        ">
          <div className="text-white space-y-7">
            <h2 className="lg:text-5xl text-3xl font-bold w-2/3 lg:w-1/3 ">Fluid Flushes Enhancing Vehicle Longevity</h2>
            <p className="w-[522px] text-sm lg:text-xl "> 
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div >
              <button className="btn btn-sm lg:btn-md btn-error mr-5 ">Discover More</button>
              <button className="btn btn-sm lg:btn-md btn-outline btn-warning">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
       
    </div>
  );
};

export default Banner;
