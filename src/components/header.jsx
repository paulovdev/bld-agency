import Image from "next/image";
import { IoIosPlay } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
const Header = () => {
  const container = useRef();

  const slideTextAnim = {
    initial: {
      y: "150%",
    },
    animate: (custom) => ({
      y: "0",
      transition: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1],
        delay: custom,
      },
    }),
    exit: {
      y: "150%",
    },
  };
  const arraySlideUpAnimation = {
    initial: { y: "175%" },
    animate: (i) => ({
      y: "0",
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: 1.75 + i * 0.05,
      },
    }),
    exit: { y: "175%" },
  };
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["-2rem", "2rem"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["-4rem", "4rem"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["-6rem", "6rem"]);

  return (
    <>
      <div
        className="p-5 mb-16 h-[50vh] flex flex-col items-center justify-end max-md:h-[30vh] max-lg:p-3"
        ref={container}
      >
        <div className="relative w-full flex justify-between items-start gap-2 overflow-hidden max-lg:justify-start max-lg:gap-0">
          {[
            "b",
            "e",
            " ",
            "l",
            "o",
            "u",
            "d",
            "—",
            "d",
            "i",
            "s",
            "r",
            "u",
            "p",
            "t",
          ].map((phrase, i) => (
            <motion.h2
              key={i}
              custom={i}
              variants={arraySlideUpAnimation}
              initial="initial"
              animate="animate"
              className="w-fit text-[15.5vw] text-p font-bigger font-bold leading-[1] tracking-[3px] uppercase 
              flex items-center justify-center"
            >
              {phrase}
            </motion.h2>
          ))}
        </div>
        <div className="w-full flex items-end justify-between">
          <div className="h-fit overflow-hidden">
            <motion.p
              className="text-[1rem] text-p uppercase max-md:text-[.75rem]"
              variants={slideTextAnim}
              initial="initial"
              animate="animate"
              custom={2.25}
            >
              Bold brands stand out. We make noise with purpose.
            </motion.p>
          </div>
          <div className="h-fit overflow-hidden">
            <motion.div
              variants={slideTextAnim}
              initial="initial"
              animate="animate"
              custom={2.75}
            >
              <FaGlobe className="text-[2.5rem] text-p max-md:text-[1.5rem]" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="p-5 w-full flex items-center gap-2 max-lg:p-3">
        <motion.figure
          style={{ y: y1 }}
          className="relative flex items-center justify-center group"
        >
          <Image
            src={"/photos/home/img-1.jpg"}
            width={1000}
            height={1000}
            alt=""
            className="w-[650px] h-screen object-cover group-hover:brightness-75 transition-all duration-500 max-lg:h-[50vh]"
          />
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500">
            <IoIosPlay className="w-25 h-25 bg-bg/50 backdrop-blur-[16px] rounded-full p-5 text-[5rem] text-p flex items-center justify-center" />
          </div>
        </motion.figure>
        <motion.figure
          style={{ y: y2 }}
          className="relative flex items-center justify-center group"
        >
          <Image
            src={"/photos/home/img-4.jpg"}
            width={1000}
            height={1000}
            alt=""
            className="w-[650px] h-screen object-cover group-hover:brightness-75 transition-all duration-500 max-lg:h-[50vh]"
          />
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500">
            <IoIosPlay className="w-25 h-25 bg-bg/50 backdrop-blur-[16px] rounded-full p-5 text-[5rem] text-p flex items-center justify-center" />
          </div>
        </motion.figure>
        <motion.figure
          style={{ y: y3 }}
          className="relative flex items-center justify-center group"
        >
          <Image
            src={"/photos/home/img-3.jpg"}
            width={1000}
            height={1000}
            alt=""
            className="w-[650px] h-screen object-cover group-hover:brightness-75 transition-all duration-500 max-lg:h-[50vh]"
          />
          <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500">
            <IoIosPlay className="w-25 h-25 bg-bg/50 backdrop-blur-[16px] rounded-full p-5 text-[5rem] text-p flex items-center justify-center" />
          </div>
        </motion.figure>
      </div>
    </>
  );
};

export default Header;
