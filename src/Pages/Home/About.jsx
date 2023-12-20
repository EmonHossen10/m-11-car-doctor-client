import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col gap-16 lg:flex-row">
        {/* image  */}
       <div className="lg:w-1/2  relative">
       <img src={person} className="  lg:w-3/4 w-10/12 rounded-lg shadow-2xl" />
       <img src={parts} className="lg:w-1/2 w-6/12 rounded-lg shadow-2xl first-letter:
       absolute right-5 top-1/2  border-8 border-white
       " />
       </div>
        <div className="lg:w-1/2">
            <h3 className="font-bold text-xl text-[#FF3811] mb-2">About Us</h3>
          <h1 className="lg:text-4xl text-2xl  font-bold lg:w-[376px] ">We are qualified & of experience in this field</h1>
          <p className="py-6 lg:w-[489px] ">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <p className=" lg:w-[489px] ">
          the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] text-white mt-4 ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
