import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Menu = ({ openMenu, setOpenMenu }) => {
  const [contactHover, setContactHover] = useState(false);
  const menuAnim = {
    initial: { top: "-100vh" },
    animate: {
      top: "0vh",
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
    exit: {
      top: "-100vh",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5,
      },
    },
  };

  const menuNavs = [
    { title: "HOME", href: "#" },
    { title: "ABOUT", href: "#about" },
    { title: "WE DO?", href: "#we-do" },
    { title: "REEL", href: "#reel" },
  ];

  const textSlideUpAnimation = {
    initial: {
      y: "0%",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    hover: {
      y: "-50%",
      transition: {
        duration: 0.5,
        type: "tween",
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
  return (
    <>
      <motion.div
        className="fixed inset-0 w-screen h-screen bg-bg-2 z-100 max-lg:h-full"
        variants={menuAnim}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.div
          className="fixed top-0 left-0 p-5 w-full h-[50px] flex items-center justify-between mix-blend-exclusion"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          exit={{ opacity: 0 }}
        >
          <p className="text-p text-[.75rem]">BLD®</p>
          <button onClick={() => setOpenMenu(!openMenu)}>
            <span className="text-p text-[.75rem]">CLOSE</span>
          </button>
        </motion.div>
        <div className="size-full flex items-center justify-center max-lg:py-10 max-lg:items-start max-lg:justify-start max-lg:overflow-y-scroll">
          <div className="p-5 w-full grid grid-cols-4 gap-2 max-md:grid-cols-1 max-lg:grid-cols-2 max-lg:p-2">
            {menuNavs.map((item, i) => {
              const [textHover, setTextHover] = useState(false);

              return (
                <motion.a
                  href={item.href}
                  onClick={() => setOpenMenu(false)}
                  key={i}
                  onMouseEnter={() => setTextHover(true)}
                  onMouseLeave={() => setTextHover(false)}
                  className="w-full h-[400px] bg-bg flex items-center justify-center cursor-pointer overflow-hidden max-lg:col-span-3"
                  whileTap={{ scale: 1.025 }}
                  initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{
                    clipPath: "inset(0% 0% 0% 0%)",
                    transition: {
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.5 + 0.03 * i,
                    },
                  }}
                  exit={{
                    clipPath: "inset(100% 0% 0% 0%)",
                    transition: {
                      duration: 0.5,
                      ease: [0.76, 0, 0.24, 1],
                      delay: 0.03 * i,
                    },
                  }}
                >
                  <div className="h-[60px] overflow-hidden">
                    <motion.div
                      variants={textSlideUpAnimation}
                      initial="initial"
                      animate={textHover ? "hover" : "initial"}
                      className="h-fit flex flex-col items-center justify-center"
                    >
                      <p className="text-[4rem] text-p font-bigger leading-[1] tracking-[3px] uppercase ">
                        {item.title}
                      </p>
                      <p className="text-[4rem] text-p font-bigger leading-[1] tracking-[3px] uppercase ">
                        GO TO
                      </p>
                    </motion.div>
                  </div>
                </motion.a>
              );
            })}

            <motion.a
              href="#collabs"
              onClick={() => setOpenMenu(false)}
              className="w-full h-[400px] bg-bg flex items-center justify-center col-span-3 cursor-pointer overflow-hidden max-lg:col-span-3"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                transition: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 + 0.03,
                },
              }}
              exit={{
                clipPath: "inset(100% 0% 0% 0%)",
                transition: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.04,
                },
              }}
            >
              <div className="w-full p-10 grid grid-cols-3 max-md:grid-cols-2 max-md:gap-4">
                <a
                  href="#truein"
                  className="text-[3rem] text-p  leading-[1] tracking-[3px] uppercase  
                  flex items-center justify-center hover:text-p/50 transition-all duration-300 max-lg:text-[2.75rem]"
                >
                  TRUEIN
                </a>
                <a
                  href="#nova"
                  className="text-[3rem] text-p  leading-[1] tracking-[3px] uppercase   
                  flex items-center justify-center hover:text-p/50 transition-all duration-300 max-lg:text-[2.75rem]"
                >
                  NOVA
                </a>
                <a
                  href="#echo"
                  className="text-[3rem] text-p  leading-[1] tracking-[3px] uppercase  
                  flex items-center justify-center hover:text-p/50 transition-all duration-300 max-lg:text-[2.75rem] max-md:col-span-2"
                >
                  ECHO
                </a>
              </div>
            </motion.a>

            <motion.a
              href="#contact"
              onClick={() => setOpenMenu(false)}
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
              className="w-full h-[400px]  bg-bg flex items-center justify-center cursor-pointer overflow-hidden  max-lg:col-span-3"
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{
                clipPath: "inset(0% 0% 0% 0%)",
                transition: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.5 + 0.06,
                },
              }}
              exit={{
                clipPath: "inset(100% 0% 0% 0%)",
                transition: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.07,
                },
              }}
            >
              <div className="h-[60px] overflow-hidden">
                <motion.div
                  variants={textSlideUpAnimation}
                  initial="initial"
                  animate={contactHover ? "hover" : "initial"}
                  className="h-fit flex flex-col items-center justify-center"
                >
                  <p className="text-[4rem] text-p font-bigger leading-[1] tracking-[3px] uppercase ">
                    CONTACT
                  </p>
                  <p className="text-[4rem] text-p font-bigger leading-[1] tracking-[3px] uppercase ">
                    GO TO
                  </p>
                </motion.div>
              </div>
            </motion.a>
          </div>
        </div>

        <div className="absolute bottom-0 p-5 w-full h-[50px] flex items-center justify-between">
          <p className="text-[.75rem] text-s">
            <span className="text-s/75">W/:</span> NEXTJS, FRAMER MOTION & LENIS
          </p>
          <p className="text-[.75rem] text-s">
            <span className="text-s/75">MADE BY:</span> PAULOVDEV
          </p>
          <p className="text-[.75rem] text-s">
            <span className="text-s/75">IMAGES & VIDEOS:</span> UNSPLASH &
            PEXELS
          </p>
        </div>
      </motion.div>
    </>
  );
};

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 p-5 w-full h-[50px] flex items-center justify-between z-90 mix-blend-exclusion max-lg:p-3">
        <p className="text-p text-[.75rem]">BLD®</p>
        <button onClick={() => setOpenMenu(!openMenu)}>
          <span className="text-p text-[.75rem]">MENU</span>
        </button>
      </nav>
      <AnimatePresence mode="wait">
        {openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Nav;
