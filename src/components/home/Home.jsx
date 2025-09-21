import Image1 from "../../assets/home/Illustration_1.png";
import Image2 from "../../assets/home/Illustration_2.png";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.section layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 ,ease:"easeInOut" ,delay:.2}}
      viewport={{ once: false }}
      id="Home"
      className="container mx-auto z-0 pt-15 min-px-7 max-px-32 max-w-9xl"
    >
      <div className="flex relative bg-[#F9E6D0]  min-h-80 md:h-80 lg:h-96 rounded-3xl justify-between items-stretch overflow-hidden shadow-md">
        <img
          src={Image2}
          alt="Image2"
          className="absolute left-[-2.5rem] md:left-0 max-w-32 h-full"
        />
        <div className=" flex flex-col justify-around items-center w-full md:gap-1">
          <h1 className="font-bold  px-15 lg:px-40 py-3 md:text-2xl lg:text-3xl text-[#00373E] text-center">
            Support for Your Mental Well-being
          </h1>
          <p className="text-center  lg:max-w-[50%] md:max-w-[70%] max-w-[75%] md:text-lg lg:text-xl text-[#00373E]">
            Connect with licensed therapists, counselors, and wellness coaches
            to support your journey.
          </p>
          <motion.button layout
          initial={{color:"white"}}
            whileHover={{ scale: 1.2 ,boxShadow:"0px 5px 5px 1px #00373E"}}
            transition={{ duration: 0.3 ,ease:"easeInOut"}}
            whileTap={{scale:.9}}
            className=" bg-[#00373E] rounded-3xl md:px-7 md:py-3 px-5 py-2 my-3 md:my-5 font-bold   cursor-pointer "
          >
            Get Started
          </motion.button>
        </div>
        <img

          src={Image1}
          alt="Image2"
          className="absolute right-[-.1rem] md:right-0 max-w-32 h-full"
        />
      </div>
    </motion.section>
  );
}
