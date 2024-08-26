import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";

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
            <p className="text-xl font-montserrat ">I want a stimulating teaching and research position where I can use my technical skills, creativity, and learning 
            experiences to grow professionally and contribute to the organization`s success. </p>
        </div>
        </div>
    );
};

export default RightSection;