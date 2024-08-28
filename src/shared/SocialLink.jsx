
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialYoutube,
} from "react-icons/sl";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const socialAccounts = [

 
  {
    title: "linkedin",
    link: "linkedin.com/in/rafiuzzaman",
    icon: <SlSocialLinkedin />,
    delay: 0.9,
  },
  {
    title: "facebook",
    link: "https://www.facebook.com/rafiuzzaman.ewu",
    icon: <SlSocialFacebook />,
    delay: 0.95,
  },
  {
    title: "instagram",
    link: "https://www.instagram.com/simplenoor143/",
    icon: <SlSocialInstagram />,
    delay: 1,
  },
];
const SocialLInks = ({ className }) => {
  return (
    <div className={twMerge("flex  gap-x-5", className)}>
      {socialAccounts?.map((item) => (
        <motion.a
          key={item?.title}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: item?.delay, ease: "easeIn" }}
          href={item?.link}
          target="blank"
        >
          <span className="w-10 h-10 text-xl text-white border-[1px] inline-flex items-center justify-center rounded-full border-zinc-500 hover:border-designColor text-lightText hover:text-designColor duration-200 hover:bg-black">
            {item?.icon}
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLInks;