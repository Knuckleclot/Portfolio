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
      delay:0.45*index,
      duration:0.5,
      ease:'easeIn',
    }
  }),
}


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
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            June 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            Learning ReactJS
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Explored the fundamentals of ReactJS, mastering components,
            state management, and building dynamic user interfaces.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            September 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            Embracing TypeScript
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Delved into TypeScript, adding static typing and enhanced
            development tooling to my projects for better scalability.
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            November 2021
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            Adopting Zustand for State Management
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Learned and implemented Zustand for efficient state management in React applications, enhancing scalability and performance.
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </time>
          <h3 className="text-lg font-semibold text-gray-300">
            Mastering Tailwind CSS and Framer Motion
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Leveraged Tailwind CSS for efficient styling and integrated Framer
            Motion for captivating animations, enhancing the overall user
            experience.
          </p>
        </li>
      </ol>
    </>
  );
};

export default Timeline;
