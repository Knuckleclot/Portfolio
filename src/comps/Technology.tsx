import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai"; 
import { RiZhihuFill } from "react-icons/ri"; 
import { BsLightningFill } from "react-icons/bs"; 
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    y:100,
  },
  animate: (index:number)=>( {
    opacity:1,
    y:0,
    transition:{
      delay:0.15*index,
      duration:0.5,
      ease:'easeIn',
    }
  }),
}

const Technology = () => {
  interface Tech {
    name: string;
    logo: JSX.Element | string; // Change type to JSX.Element for storing React components
  }

  const myTechnology: Tech[] = [
    {
      name: 'ReactJS',
      logo: <FaReact size={35} className="text-green-600"/>,
    },
    {
      name: 'TypeScript',
      logo: <AiOutlineAntDesign size={35} className="text-green-600"/>,
    },
    {
      name: 'Tailwind CSS',
      logo: <SiTailwindcss size={35} className="text-green-600"/>,
    },
    // {
    //   name: 'Node.js',
    //   logo: <FaNodeJs size={35} className="text-green-600"/>,
    // },
    // {
    //   name: 'MongoDB',
    //   logo: <SiMongodb size={35} className="text-green-600"/>,
    // },
    {
      name: 'Framer Motion',
      logo: <BsLightningFill size={35} className="text-green-600"/>,
    },
    {
      name: 'Zustand',
      logo: <RiZhihuFill size={35} className="text-green-600"/>,
    },
    {
      name: 'Python',
      logo: <FaPython size={35} className="text-green-600"/>,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <motion.p className="text-white text-xl font-medium"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView={'animate'}
      viewport={{
        once:true,
      }}
      custom={0.5}>Technology</motion.p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {myTechnology?.map((tech, index) => (
          <motion.div className="rounded-lg flex flex-col p-4 bg-[#222222] gap-2 justify-center items-center" key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={'animate'}
          viewport={{
            once:true,
          }}
          custom={index}>
            {typeof tech?.logo === 'string' ? <div>{tech?.logo}</div> : tech?.logo}
            <p className="font-medium text-white">{tech?.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
