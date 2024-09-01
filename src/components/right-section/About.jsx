import { FcAbout } from "react-icons/fc";

const About = () => {
    return (
        <div>
              <div className="bg-gray-300 w-full p-10 rounded-tl-xl rounded-br-xl my-10">
        <h1 className="text-3xl font-montserrat font-semibold flex items-center gap-2">
          About me <FcAbout className="animate-pulse" />{" "}
        </h1>
        <div className="divider"></div>
        <p className="text-xl font-sans leading-9">
          I am an experienced Data Analyst with extensive experience in App
          Store Optimization (ASO). Specializing in transforming raw data into
          actionable insights to enhance app visibility and performance.
          Proficiency in data interpretation, statistical analysis and various
          analytical tools and programming languages.
        </p>
      </div>
        </div>
    );
};

export default About;