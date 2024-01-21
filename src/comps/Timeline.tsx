import {motion} from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity:0,
    y:100,
  },
  animate: (index:number)=>( {
    opacity:1,
    y:0,
    transition:{
      delay:0.20*index,
      duration:0.5,
      ease:'easeIn',
    }
  }),
}

type TimelineProps = {
  name:string,
  date:string,
  desc:string,
}

const timelines = [
  {
    name:'Learning ReactJS',
    date:'June 2021',
    desc:'Explored the fundamentals of ReactJS, mastering components, state management, and building dynamic user interfaces.'
  },
  {
    name:'Embracing TypeScript',
    date:'September 2021',
    desc:'Delved into TypeScript, adding static typing and enhanced development tooling to my projects for better scalability.'
  },
  {
    name:'Adopting Zustand for State Management',
    date:'November 2021',
    desc:'Learned and implemented Zustand for efficient state management in React applications, enhancing scalability and performance.'
  },
  {
    name:'Mastering Tailwind CSS and Framer Motion',
    date:'April 20221',
    desc:'Leveraged Tailwind CSS for efficient styling and integrated Framer Motion for captivating animations, enhancing the overall user experience.'
  },
]


const Timeline = () => {
  return (
    <>
      <motion.p className="text-white text-xl font-medium"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once:true,
      }}
      custom={0}
      >My timeline</motion.p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {timelines?.map((timeline:TimelineProps,index)=>(
          <motion.li key={timeline?.name} className="mb-10 ms-4"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView={'animate'}
          viewport={{
            once:true,
          }}
          custom={index}
          >
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {timeline?.date}
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            {timeline?.name}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {timeline?.desc}
          </p>
        </motion.li>
        ))}
      </ol>
    </>
  );
};

export default Timeline;
