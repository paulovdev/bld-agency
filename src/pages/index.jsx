import { useEffect } from "react";
import Lenis from "lenis";
import About from "@/components/about";
import Header from "@/components/header";
import WeDo from "@/components/we-do";
import MiniGallery from "@/components/mini-gallery";
import Reel from "@/components/reel";
import Loading from "@/utils/loading";
import Collabs from "@/components/collabs";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <Loading>
      <main className="">
        <Header />
        <About />
        <WeDo />
        <MiniGallery />
        <Reel />
        <Collabs />
        <Contact />
        <Footer />
      </main>
    </Loading>
  );
};

export default Home;
