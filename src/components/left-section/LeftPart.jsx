import { BiAnalyse } from "react-icons/bi";
import { personalImg, resume } from "../../assets";
import { CiSaveDown1 } from "react-icons/ci";
import CustomButton from "../../shared/CustomButton";
import { HiReply } from "react-icons/hi";
import TypeAnimations from "../../shared/TypeAnimation";
import SocialLInks from "../../shared/SocialLink";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const LeftPart = () => {

  const handleButtonClick = () => {
    // Replace this URL with your Google Drive link
    const driveLink = 'https://drive.google.com/file/d/1c0YFDcXsevIWY8FhylWm2FZYUxpobd3I/view';
    window.open(driveLink, '_blank');
  };
  return (
    <div className="mt-10 lg:mt-20 ">
      <motion.img  animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}transition={{
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.2, 0.5, 0.8, 1],
     
      repeatDelay: 2
    }}
        src={personalImg}
        alt="personalImg"
        className="w-52 lg:w-64 mx-auto rounded-full border-[8px] border-[#ffa51f] text-blue-500 font-bold py-2 px-2  animate-borderColorChange"
      />
      {/* name title  */}
      <div className="space-y-6">
        <h1 className="text-3xl lg:text-5xl text-white font-poppins font-semibold mt-8">
          Hi, I’m{" "}
          <span className="text-[#ffa51f] font-montserrat">
            Rafiuzzaman Rafi
          </span>
        </h1>
        <h1 className="text-2xl lg:text-4xl text-[#ffffff] font-poppins font-bold flex items-end gap-3">
         <TypeAnimations/>
          <BiAnalyse className="animate-spin text-[#ffa51f] font-semibold" />{" "}
        </h1>
        <p className="text-xl   text-gray-300 font-montserrat w-[100%] font-normal leading-[34px] ">
          
          Dynamic and technically skilled, I am a creative <span className="text-[#ffa51f]">ASO expert</span>  in optimizing app performance and driving
          growth through innovative strategies.
        </p>
        {/* social link  */}
       <div className="mx-auto ">
       <SocialLInks/>
       </div>
    
       {/* button  */}
       <div className="flex flex-col lg:flex-row items-center gap-12 ">
        <CustomButton  text='Download CV'/>
      
        <button onClick={handleButtonClick}  className="hover:bg-[#ffa51f] px-4 py-3 text-center text-xl font-montserrat font-semibold hover:text-gray-900 rounded-[8px] flex items-center gap-2 bg-orange-600 duration-300 text-white">Thesis Paper  <HiReply   className="text-2xl animate-pulse"></HiReply> </button>
        
       </div>
      </div>
    </div>
  );
};

export default LeftPart;