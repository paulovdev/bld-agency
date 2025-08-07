import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";

const Reel = () => {
  const video = useRef();
  const container = useRef();
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

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end start"],
  });

  const padding = useTransform(scrollYProgress, [0, 1], ["15rem", "-15rem"]);

  return (
    <div className="relative h-screen bg-bg" id="reel" ref={container}>
      <motion.video
        ref={video}
        src="/reel.mp4"
        muted
        autoPlay
        playsInline
        loop
        className="size-full object-cover"
        style={{ padding }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        ref={ref}
      >
        <div className="flex flex-col items-center justify-center max-lg:justify-start max-lg:gap-0">
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
                animate={inView ? "animate" : "initial"}
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
                animate={inView ? "animate" : "initial"}
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
