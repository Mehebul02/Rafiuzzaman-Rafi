import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { msWord } from "../../assets";
import { FaFileWord } from "react-icons/fa";
import { SiMicrosoftaccess, SiMicrosoftexcel, SiMicrosoftpowerpoint } from "react-icons/si";

const RightSection = () => {
    return (
        <div>
            {/* about me  */}
            <div className="bg-gray-300 w-full p-10 rounded-tl-xl rounded-br-xl my-10">
            <h1 className="text-3xl font-montserrat font-semibold flex items-center gap-2">About me <FcAbout className="animate-pulse"/> </h1>
            <div className="divider"></div>
            <p className="text-xl font-montserrat ">I want a stimulating teaching and research position where I can use my technical skills, creativity, and learning 
            experiences to grow professionally and contribute to the organization`s success. </p>
        </div>
            {/* about skills  */}
            <div  className="bg-gray-300 w-full p-10 rounded-tl-xl rounded-br-xl ">
            <h1 className="text-3xl font-montserrat font-bold flex items-center gap-2">About My Skills <GiSkills className="text-[#4fb0ff] animate-bounce"/> </h1>
            <div className="divider"></div>
          <div className="grid grid-cols-4">
          {/* <img src={msWord} alt="ms-word" className="w-48"  />
           <img src={msWord} alt="ms-word" className="w-48"  />
           <img src={msWord} alt="ms-word" className="w-48"  />
           <img src={msWord} alt="ms-word" className="w-48"  /> */}
           {/* ms word  */}
            <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <span><FaFileWord className="text-6xl text-blue-700 mx-auto"/> </span>
</div>
           {/* ms excel  */}
            <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <span><SiMicrosoftexcel className="text-6xl text-blue-700 mx-auto"/> </span>
</div>
           {/* ms power point  */}
            <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <span><SiMicrosoftpowerpoint className="text-6xl text-blue-700 mx-auto"/> </span>
</div>
           {/* ms access  */}
            <div className="w-28 bg-slate-300 hover:bg-slate-200 p-4 rounded-xl shadow-2xl transform ">
  <span><SiMicrosoftaccess className="text-6xl text-blue-700 mx-auto"/> </span>
</div>

          </div>
        </div>
        </div>
    );
};

export default RightSection;