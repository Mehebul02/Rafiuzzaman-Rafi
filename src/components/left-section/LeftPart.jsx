import { BiAnalyse } from "react-icons/bi";
import { personalImg } from "../../assets";
import { CiSaveDown1 } from "react-icons/ci";
import CustomButton from "../../shared/CustomButton";
import { HiReply } from "react-icons/hi";
import TypeAnimations from "../../shared/TypeAnimation";
import SocialLInks from "../../shared/SocialLink";

const LeftPart = () => {
 
  return (
    <div className="mt-10 ">
      <img
        src={personalImg}
        alt="personalImg"
        className="w-64 rounded-full border-[8px] border-[#ffa51f] text-blue-500 font-bold py-2 px-2  animate-borderColorChange"
      />
      {/* name title  */}
      <div className="space-y-8">
        <h1 className="text-5xl text-white font-poppins font-semibold mt-8">
          Hi, I’m{" "}
          <span className="text-[#ffa51f] font-montserrat">
            Rafiuzzaman Rafi
          </span>
        </h1>
        <h1 className="text-4xl text-[#ffffff] font-poppins font-bold flex items-end gap-3">
         <TypeAnimations/>
          <BiAnalyse className="animate-spin text-[#ffa51f] font-semibold" />{" "}
        </h1>
        <p className="text-xl text-gray-300 font-montserrat w-[100%] font-normal leading-[34px] ">
          
          Dynamic and technically skilled, I am a creative <span className="text-[#ffa51f]">ASO expert</span>  in optimizing app performance and driving
          growth through innovative strategies.
        </p>
        {/* social link  */}
        <SocialLInks/>
       {/* button  */}
       <div className="flex items-center gap-12">
        <CustomButton text='Download CV'/>
        <button className="hover:bg-[#ffa51f] px-4 py-3 text-center text-xl font-montserrat font-semibold hover:text-gray-900 rounded-[8px] flex items-center gap-2 bg-orange-600 duration-300 text-white">Hire Me  <HiReply   className="text-2xl animate-pulse"></HiReply> </button>
       </div>
      </div>
    </div>
  );
};

export default LeftPart;