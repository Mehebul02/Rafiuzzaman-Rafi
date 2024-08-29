
import { GiSkills } from "react-icons/gi";
import {  rlanguage,sas, spss, stata } from "../../assets";
import { FaFileWord, FaLaptopCode } from "react-icons/fa";
import {
  SiMicrosoftaccess,
  SiMicrosoftexcel,
  SiMicrosoftpowerpoint,
} from "react-icons/si";
import { MdDevicesOther } from "react-icons/md";
import About from "./About";
import Contact from "./Contact";

const RightSection = () => {
  return (
    <div>
      {/* about me  */}
    <About/>
      {/* about skills  */}
      <div className="bg-gray-300 w-full p-10 rounded-tl-xl rounded-br-xl ">
        <h1 className="text-3xl font-montserrat font-bold flex items-center gap-2">
          About My Skills <GiSkills className="text-[#4fb0ff] animate-bounce" />{" "}
        </h1>
        <div className="divider"></div>
        <h1 className="text-xl  text-[#000000] font-serif flex items-center gap-2 my-5">
          Programming Skills <FaLaptopCode className="text-[#4fb0ff]" />{" "}
        </h1>
        {/* progarmming skills  */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
          {/* programming skills  */}
          {/* R language  */}
          <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <img src={rlanguage} alt="" />
          </div>
          {/* R language  */}
          {/* <div className="w-32 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <img src={rStudio} alt="rstudio" className="mt-5" />
          </div> */}
          {/* spss language  */}
          <div className="w-32 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <img src={spss} alt="rstudio" className="mt-5" />
          </div>
          {/* sas language  */}
          <div className="w-32 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <img src={sas} alt="rstudio" className="mt-5" />
          </div>
          {/* sas language  */}
          <div className="w-32 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <img src={stata} alt="rstudio" className="mt-5" />
          </div>
          {/* other skills  */}
        </div>
        {/* others skills  */}
        <h1 className="text-xl  text-[#000000] font-serif flex items-center gap-2 mt-7 ">
          Other's Skills <MdDevicesOther className="text-[#4fb0ff]" />{" "}
        </h1>
        <div className="divider"></div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {/* ms word  */}
          <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <span>
              <FaFileWord className="text-6xl text-blue-700 mx-auto" />{" "}
            </span>
          </div>
          {/* ms excel  */}
          <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <span>
              <SiMicrosoftexcel className="text-6xl text-blue-700 mx-auto" />{" "}
            </span>
          </div>
          {/* ms power point  */}
          <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <span>
              <SiMicrosoftpowerpoint className="text-6xl text-blue-700 mx-auto" />{" "}
            </span>
          </div>
          {/* ms access  */}
          <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
            <span>
              <SiMicrosoftaccess className="text-6xl text-blue-700 mx-auto" />{" "}
            </span>
          </div>
        </div>
      </div>
      {/* contact form  */}
      <Contact/>
    </div>
  );
};

export default RightSection;
