import { personalImg } from "../../assets";

const LeftPart = () => {
    return (
        <div className="mt-10">
            <img src={personalImg} alt="personalImg" className="w-64 rounded-full border-4 border-blue-500 text-blue-500 font-bold py-2 px-2  animate-borderColorChange" />
        </div>
    );
};

export default LeftPart;