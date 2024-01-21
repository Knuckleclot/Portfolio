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

const Contact = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8">
      <motion.p className="text-white text-2xl md:text-3xl text-center font-medium"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView={'animate'}
        viewport={{
          once:true,
        }}
      >Get started with a consultation today.</motion.p>
      <motion.p className="text-gray-500 text-lg md:text-xl text-center font-normal"
       variants={fadeInAnimationVariants}
       initial="initial"
       whileInView={'animate'}
       viewport={{
         once:true,
       }}
       custom={1}>
        Whether you have questions, ideas, or projects in mind, our team is ready to assist you every step of the way. Schedule a consultation today to explore how we can turn your vision into reality and achieve success together.
      </motion.p>
      <motion.button className="px-6 sm:px-12 py-3 bg-green-600 rounded-lg w-max"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView={'animate'}
      viewport={{
        once:true,
      }}
      custom={2}>
        <a href="mailto:007lazi@gmail.com" className="text-white font-normal">Let's work together</a>
      </motion.button>
    </div>
  )
}

export default Contact