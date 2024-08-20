import { BiAnalyse } from "react-icons/bi";
import { personalImg } from "../../assets";
import { CiSaveDown1 } from "react-icons/ci";
import CustomButton from "../../shared/CustomButton";
import { HiReply } from "react-icons/hi";

const LeftPart = () => {
  return (
    <div className="mt-10">
      <img
        src={personalImg}
        alt="personalImg"
        className="w-64 rounded-full border-[8px] border-[#ffa51f] text-blue-500 font-bold py-2 px-2  animate-borderColorChange"
      />
      {/* name title  */}
      <div className="space-y-5">
        <h1 className="text-7xl text-white font-poppins font-semibold mt-8">
          Hi, I’m{" "}
          <span className="text-[#ffa51f] font-montserrat">
            Rafiuzzaman Rafi
          </span>
        </h1>
        <h1 className="text-4xl text-[#8D9093] font-poppins font-bold flex items-end gap-3">
          Data Analyst{" "}
          <BiAnalyse className="animate-spin text-[#ffa51f] font-semibold" />{" "}
        </h1>
        <p className="text-xl text-gray-300 font-montserrat w-2/3 font-normal ">
          Rafiuzzaman Rafi is a skilled Data Analyst with a strong background in
          data interpretation, statistical analysis, and deriving actionable
          insights. Proficient in using various data analysis tools and
          programming languages, Mehebul excels at transforming raw data into
          meaningful information to support decision-making processes.
        </p>
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