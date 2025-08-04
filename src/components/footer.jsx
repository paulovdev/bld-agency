import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
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
  return (
    <footer
      className="relative h-[50dvh]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed w-full h-[50dvh] bottom-0 ">
        <figure className="absolute inset-0 w-screen h-screen z-[-1]">
          <Image
            src="/photos/home/img-14.jpg"
            width={2000}
            height={1500}
            alt=""
            className="w-screen h-screen brightness-75 object-cover"
          />
        </figure>
        <div className="h-full flex flex-col items-end justify-end">
          <div className="w-full h-fit p-5 flex items-center justify-between max-lg:p-3">
            <p className="text-p text-[.75rem] cursor-pointer">
              © 2025. BLD® rights reserved.
            </p>
            <p
              className="text-p text-[.75rem] cursor-pointer"
              onClick={() => scrollTo({ top: 0 })}
            >
              TO TOP
            </p>
          </div>

          <div className="relative p-5 w-full h-fit flex justify-between items-end gap-2 overflow-hidden max-lg:justify-start max-lg:gap-0 max-lg:p-3">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
