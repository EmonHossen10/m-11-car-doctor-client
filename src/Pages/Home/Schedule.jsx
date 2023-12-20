import { SlCalender  } from "react-icons/sl";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";


const Schedule = () => {
    return (
        <>
             <div className="flex justify-around p-8     my-8    bg-black text-white rounded-xl">
      <div className="w-1/4 flex items-center p-4 gap-5   ">
        <div>
        <SlCalender className="text-3xl text-[#FF3811] " />
        </div>
        <div>
        <p className="text-xs">We are open monday-friday</p>
        <h2 className="text-lg font-bold mb-2">7:00 am - 9:00 pm</h2>
        </div>
      </div>
      <div className="w-1/4 flex items-center p-4 gap-5   ">
        <div>
        <FaPhoneVolume  className="text-3xl text-[#FF3811] " />
        </div>
        <div>
        <p className="text-xs">Have a question?</p>
        <h2 className="text-lg font-bold mb-2">+2546 251 2658</h2>
        </div>
      </div>
      <div className="w-1/4 flex items-center p-4 gap-5   ">
        <div>
        <ImLocation2 className="text-3xl text-[#FF3811] " />
        </div>
        <div>
        <p className="text-xs">Need a repair? our address</p>
        <h2 className="  font-bold mb-2">Liza Street, New York</h2>
        </div>
      </div>

       
    </div>
        </>
    );
};

export default Schedule;