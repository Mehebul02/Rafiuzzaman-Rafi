import { CiSaveDown1 } from "react-icons/ci";

const CustomButton = ({text}) => {
    return (
        <div>
             <button className="bg-[#ffa51f] px-4 py-3 text-center text-xl font-montserrat font-semibold text-gray-900 rounded-[8px] flex items-center gap-2 hover:bg-orange-600 duration-300 hover:text-white">{text} <CiSaveDown1 className="text-2xl animate-bounce"></CiSaveDown1>  </button>
        </div>
    );
};

export default CustomButton;