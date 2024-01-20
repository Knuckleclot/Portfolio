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
import { motion } from 'framer-motion'
import { ReactElement } from "react";

type contactType = {
  name:string,
  image:ReactElement,
  link:string,
}

const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    y:100,
  },
  animate: (index:number)=>( {
    opacity:1,
    y:0,
    transition:{
      delay:0.45*index,
      duration:0.5,
      ease:'easeIn',
    }
  }),
}

const contactInfo = [
  {
    name:'Github',
    image:<PiGithubLogoFill className="text-green-600" size={20}/>,
    link:'https://github.com/Knuckleclot/',
  },
  {
    name:'LinkedIn',
    image:<PiLinkedinLogoFill className="text-green-600" size={20} />,
    link:'https://www.linkedin.com/in/muiz-rexhepi/',
  },
  {
    name:'Email',
    image:<MailIcon className="text-green-600" size={20} />,
    link:'mailto:007lazi@gmail.com',
  },
]

const Hero = () => {
  return (
    <div className="flex flex-col w-full md:gap-12 py-10 md:py-20 items-start px-6 md:px-4 lg:px-0 gap-6">
      <motion.div className="bg-green-800/40 p-2 px-3 rounded-full flex items-center gap-1"
       initial={{
        opacity:0,
      }}
      whileInView={{
        opacity:100,
        transition:{
          duration:0.5,
          ease:'easeIn',
        }
      }}
      viewport={{
        once:true,
      }}
      >
        <div className="h-2 w-2 rounded-full bg-green-600" />
        <p className="text-green-600 font-normal text-sm">Available</p>
      </motion.div>
      <div className="flex flex-col gap-1 items-start">
        <motion.div className="flex items-center gap-2"
         initial={{
          opacity:0,
          y:100,
        }}
        whileInView={{
          opacity:100,
          y:0,
          transition:{
            duration:0.5,
            ease:'easeIn',
          }
        }}
        viewport={{
          once:true,
        }}>
          <p className="font-medium text-xl md:text-3xl text-white"
          >Hi, I'm Muiz</p>
          <PiHandWavingFill className="text-green-600" size={25} />
        </motion.div>
        <motion.p className="font-medium text-xl md:text-3xl text-green-600"
        initial={{
          opacity:0,
          y:100,
        }}
        whileInView={{
          opacity:100,
          y:0,
          transition:{
            delay:0.1,
            duration:0.5,
            ease:'easeIn',
          }
        }}
        viewport={{
          once:true,
        }}>
          Front-End Developer
        </motion.p>
      </div>
      <div className="flex items-center justify-between w-full gap-2">
        {contactInfo?.map((contact:contactType,index:number)=>(
        <Link key={contact?.name} to={contact?.link} className="flex-grow">
          <motion.div className="bg-[#222222] p-2 px-3 rounded-full flex items-center justify-center gap-2"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once:true,
          }}
          custom={index}
          >
            {contact?.image}
            <p className="text-white font-normal text-sm md:text-base">{contact?.name}</p>
          </motion.div>
        </Link>
        ))}
      </div>
      <motion.p className="text-gray-500 font-normal md:text-lg"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once:true,
      }}
      custom={2.5}
      >
      Frontend Web Developer with a flair for design and a focus on user-friendly experiences. Proficient in React, Typescript and TailwindCSS. Check out my portfolio for a glimpse into my creative and functional projects.
      </motion.p>
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
