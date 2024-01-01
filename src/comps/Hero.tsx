import { MailIcon } from "lucide-react";
import {
  PiGithubLogoFill,
  PiHandWavingFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import Timeline from "./Timeline";
import Projects from "./Projects";
import Technology from "./Technology";

const Hero = () => {
  return (
    <div className="flex flex-col w-full md:gap-12 py-10 md:py-20 items-start px-6 md:px-4 lg:px-0 gap-6">
      <div className="bg-green-800/40 p-2 px-3 rounded-full flex items-center gap-1">
        <div className="h-2 w-2 rounded-full bg-green-600" />
        <p className="text-green-600 font-normal text-sm">Available</p>
      </div>
      <div className="flex flex-col gap-1 items-start">
        <div className="flex items-center gap-2">
          <p className="font-medium text-xl md:text-3xl text-white">Hi, I'm Muiz</p>
          <PiHandWavingFill className="text-green-600" size={25} />
        </div>
        <p className="font-medium text-xl md:text-3xl text-green-600">
          Front-End Developer
        </p>
      </div>
      <div className="flex items-center justify-between w-full gap-2">
        <Link to={`https://github.com/Knuckleclot/`} className="flex-grow">
          <div className="bg-[#222222] p-2 px-3 rounded-full flex items-center justify-center gap-2">
            <PiGithubLogoFill className="text-green-600" size={20} />
            <p className="text-white font-normal text-sm md:text-base">Github</p>
          </div>
        </Link>
        <Link to={`https://www.linkedin.com/in/muiz-rexhepi/`} className="flex-grow">
          <div className="bg-[#222222] p-2 px-3 rounded-full flex items-center justify-center gap-2 flex-grow">
            <PiLinkedinLogoFill className="text-green-600" size={20} />
            <p className="text-white font-normal text-sm md:text-base">LinkedIn</p>
          </div>
        </Link>
        <Link to={'mailto:007lazi@gmail.com'} className="flex-grow">
          <div className="bg-[#222222] p-2 px-3 rounded-full flex items-center justify-center gap-2 flex-grow">
            <MailIcon className="text-green-600" size={20} />
            <p className="text-white font-normal text-sm md:text-base">Email</p>
          </div>
        </Link>
      </div>
      <p className="text-gray-500 font-normal md:text-lg">
      Frontend Web Developer with a flair for design and a focus on user-friendly experiences. Proficient in React, Typescript and TailwindCSS. Check out my portfolio for a glimpse into my creative and functional projects.
      </p>
      <div className="w-full bg-gray-500 h-[0.3px] my-4"/>
      <Timeline />
      <div className="w-full bg-gray-500 h-[0.3px] my-4"/>
      <Projects />
      <div className="w-full bg-gray-500 h-[0.3px] my-4"/>
      <Technology />
    </div>
  );
};

export default Hero;
