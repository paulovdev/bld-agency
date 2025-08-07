import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const horizontalAnimation = {
  initial: {
    left: "0%",
  },

  enter: (custom) => ({
    left: "100%",

    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 1.5 + 0.07 * custom,
    },
    transitionEnd: { left: "0%", width: 0, opacity: 0 },
  }),
  exit: (custom) => ({
    left: "0%",
    width: "100%",
    transition: {
      duration: 0.45,
      ease: [0.215, 0.61, 0.355, 1],
      delay: 0.07 * custom,
    },
  }),
};

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
  exit: (custom) => ({
    y: "150%",
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
      delay: custom,
    },
  }),
};

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
  exit: (i) => ({
    y: "-175%",
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1],
      delay: i * 0.05,
    },
  }),
};

export default function Loading({ children }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1250);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-[100dvh] flex z-[1000] pointer-events-none select-none overflow-hidden">
        <div className="relative w-full grid grid-cols-6 grid-rows-1">
          {[...Array(6)].map((_, i) => (
            <div
              className={`size-full overflow-hidden col-span-1 ${
                i === 2 ? "col-span-2" : ""
              }`}
              key={i}
            >
              <motion.div
                custom={i}
                variants={horizontalAnimation}
                initial="initial"
                animate="enter"
                exit="exit"
                className={`relative  size-full bg-bg-2 border-l border-s/25`}
              />
            </div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {loading && (
            <div className="absolute p-5 size-full flex flex-col items-center justify-between">
              <div className="h-fit overflow-hidden">
                <motion.p
                  className="w-fit text-[.75rem] text-s leading-[1]"
                  variants={slideTextAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  PAULOVDEV
                </motion.p>
              </div>
              <div className="relative w-full flex justify-center items-center overflow-hidden">
                {["B", "L", "D"].map((phrase, i) => (
                  <motion.h2
                    key={i}
                    custom={i}
                    variants={arraySlideUpAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-fit text-[8rem] text-s font-bigger leading-[1] tracking-[3px] uppercase 
              flex items-center justify-center"
                  >
                    {phrase}
                  </motion.h2>
                ))}
              </div>

              <div className="h-fit overflow-hidden">
                <motion.h1
                  className="w-fit text-[.75rem] text-s leading-[1] uppercase"
                  variants={slideTextAnim}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  be loud—disrupt
                </motion.h1>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {children}
    </>
  );
}
