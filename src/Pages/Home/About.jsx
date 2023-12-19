import person from "../../assets/images/about_us/person.jpg";
import parts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen  ">
      <div className="hero-content flex-col lg:flex-row">
       <div className="lg:w-1/2  relative">
       <img src={person} className="  w-3/4 rounded-lg shadow-2xl" />
       <img src={parts} className="w-1/2 rounded-lg shadow-2xl first-letter:
       absolute right-5 top-1/2  border-8 border-white
       " />
       </div>
        <div className="lg:w-1/2">
            <h3 className="font-bold text-xl text-[#FF3811] mb-2">About Us</h3>
          <h1 className="text-4xl font-bold w-[376px] ">We are qualified & of experience in this field</h1>
          <p className="py-6 w-[489px] ">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className=" w-[489px] ">
          the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. 
          </p>
          <button className="btn bg-[#FF3811] text-white mt-4 ">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
