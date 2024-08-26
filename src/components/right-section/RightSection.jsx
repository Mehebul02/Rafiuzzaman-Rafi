import { FcAbout } from "react-icons/fc";

const RightSection = () => {
    return (
        <div className="bg-gray-300 w-full p-10 rounded-tl-xl rounded-br-xl ">
            <h1 className="text-3xl font-montserrat font-semibold flex items-center gap-2">About me <FcAbout/> </h1>
            <div className="divider"></div>
            <p className="text-xl font-montserrat ">I want a stimulating teaching and research position where I can use my technical skills, creativity, and learning 
            experiences to grow professionally and contribute to the organization`s success. </p>
        </div>
    );
};

export default RightSection;