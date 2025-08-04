import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const container = useRef();
  const letter = useRef();
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
    offset: ["start end", "end start"],
  });
  const isInView = useInView(letter);
  const y = useTransform(scrollYProgress, [0, 1], ["500px", "100px"]);
  return (
    <div
      className="relative p-5 py-30 h-fit flex flex-col items-center justify-start text-center max-lg:px-3"
      id="about"
      ref={container}
    >
      <span className="mb-12 text-[.85rem] text-p uppercase">About BLD</span>
      <div
        className="flex flex-col items-center justify-center max-lg:justify-start max-lg:gap-0"
        ref={letter}
      >
        <div className="relative flex items-start overflow-hidden">
          {[
            "W",
            "e",
            " ",
            "d",
            "o",
            "n",
            "’",
            "t",
            " ",
            "f",
            "o",
            "l",
            "l",
            "o",
            "w",
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
          {["w", "e", " ", "d", "i", "s", "r", "u", "p", "t"].map(
            (phrase, i) => (
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
            )
          )}
        </div>
      </div>

      <motion.div
        className="absolute p-5 w-full flex items-end justify-end z-50 max-lg:p-3"
        style={{ y }}
      >
        <div className="p-5 w-[500px] h-[375px] bg-bg-2 flex flex-col items-start justify-start max-md:h-[300px]">
          <h2 className="mb-2 text-[3.5vw] text-s font-bigger leading-[1] text-start max-lg:text-[7vw]">
            BUILT TO BE BOLD.
          </h2>
          <p className="text-[.8rem] text-s/75 text-start leading-tight">
            BLD was born to break the pattern. We don’t follow trends — we
            create the next wave. Our agency is a launchpad for brands that dare
            to speak louder, stand taller, and make their presence undeniable.
          </p>
          <br />
          <p className="text-[.8rem] text-s/75 text-start leading-tight">
            We operate at the intersection of branding, design, and strategy.
            Blending aesthetics with intent, disruption with clarity. Every
            project is an opportunity to make noise — with purpose, precision,
            and bold creative energy. If it doesn’t challenge, it doesn’t
            matter.
          </p>
          <span className="h-full text-[.8rem] text-s text-start underline  flex items-end ">
            FOLLOW
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
