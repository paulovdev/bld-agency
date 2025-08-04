import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const MiniGallery = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "33.33%"]);
  const width2 = useTransform(scrollYProgress, [0, 1], ["100%", "33.33%"]);
  const width3 = useTransform(scrollYProgress, [0, 1], ["100%", "33.33%"]);
  return (
    <div className="relative h-[300vh]" ref={container}>
      <div className="sticky top-0 w-screen h-screen flex">
        <motion.figure className="flex-[2]" style={{ width }}>
          <Image
            src="/photos/home/img-7.jpg"
            width={1000}
            height={1000}
            alt=""
            className="w-full h-screen object-cover"
          />
        </motion.figure>
        <motion.figure className="flex-[2]" style={{ width: width2 }}>
          <Image
            src="/photos/home/img-10.jpg"
            width={1000}
            height={1000}
            alt=""
            className="w-full h-screen object-cover"
          />
        </motion.figure>
        <motion.figure className="" style={{ width: width3 }}>
          <Image
            src="/photos/home/img-9.jpg"
            width={1000}
            height={1000}
            alt=""
            className="w-full h-screen object-cover"
          />
        </motion.figure>
      </div>
    </div>
  );
};

export default MiniGallery;
