import { BiAnalyse } from "react-icons/bi";
import { personalImg } from "../../assets";

const LeftPart = () => {
    return (
        <div className="mt-10">
            <img src={personalImg} alt="personalImg" className="w-64 rounded-full border-[8px] border-[#ffa51f] text-blue-500 font-bold py-2 px-2  animate-borderColorChange" />
       {/* name title  */}
        <div className="space-y-5">
            <h1 className="text-5xl text-white font-poppins font-semibold mt-8">Hi, I’m <span className="text-[#ffa51f] font-montserrat">Rafiuzzaman Rafi</span>
            </h1>
            <h1 className="text-4xl text-[#8D9093] font-poppins font-bold flex items-end gap-3">Data Analyst <BiAnalyse className="animate-spin text-[#ffa51f] font-semibold"/> </h1>
<p className="text-xl text-gray-300 font-montserrat w-2/3 font-normal ">Rafiuzzaman Rafi is a skilled Data Analyst with a strong background in data interpretation, statistical analysis, and deriving actionable insights. Proficient in using various data analysis tools and programming languages, Mehebul excels at transforming raw data into meaningful information to support decision-making processes.</p>
        </div>
        </div>
    );
};

export default LeftPart;