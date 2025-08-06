import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Reel = () => {
  const video = useRef();
  const letter = useRef();
  const container = useRef();

  const isInView = useInView(video);
  const arraySlideUpAnimation = {
    initial: { y: "175%" },
    animate: (i) => ({
      y: "0",
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
        delay: i * 0.05,
      },
    }),
    exit: { y: "175%" },
  };
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });
  const padding = useTransform(scrollYProgress, [0, 1], ["20vw", "-20vw"]);
  return (
    <div className="relative h-screen bg-bg " id="reel" ref={video}>
      <motion.video
        ref={container}
        src="/reel.mp4"
        muted
        autoPlay
        playsInline
        loop
        className="size-full object-cover"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : 500,
          transition: {
            duration: 1,
            ease: [0.33, 1, 0.68, 1],
          },
        }}
        exit={{ opacity: 0 }}
        style={{ padding }}
      />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="flex flex-col items-center justify-center max-lg:justify-start max-lg:gap-0"
          ref={letter}
        >
          <div className="relative flex items-start overflow-hidden">
            {[
              "W",
              "e",
              " ",
              "b",
              "u",
              "i",
              "l",
              "d",
              " ",
              "b",
              "r",
              "a",
              "n",
              "d",
              "s",
            ].map((phrase, i) => (
              <motion.h2
                key={i}
                custom={i}
                variants={arraySlideUpAnimation}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="text-[10vw] text-p font-bigger leading-[1] tracking-[3px] uppercase"
              >
                {phrase}
              </motion.h2>
            ))}
          </div>
          <div className="relative flex items-start overflow-hidden">
            {[
              "t",
              "h",
              "a",
              "t",
              " ",
              "m",
              "a",
              "k",
              "e",
              " ",
              "n",
              "o",
              "i",
              "s",
              "e",
            ].map((phrase, i) => (
              <motion.h2
                key={i}
                custom={i}
                variants={arraySlideUpAnimation}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                className="text-[10vw] text-p font-bigger leading-[1] tracking-[3px] uppercase"
              >
                {phrase}
              </motion.h2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reel;
