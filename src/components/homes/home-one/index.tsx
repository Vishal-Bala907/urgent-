import FooterOne from "@/layouts/footers/FooterOne";
import About from "./About";
import Blog from "./Blog";
import Counter from "../../common/Counter";
import Hero from "./Hero";
import Project from "./Project";
import Service from "./Service";
import Team from "./Team";
import Testimonial from "./Testimonial";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Faq from "@/components/common/Faq";
import FaqArea from "@/components/inner-pages/faq/FaqArea";
import About3 from "../home-two/About3";
import About2 from "../home-three/About2";
import MarqueSection from "../home-two/MarqueSection";

const HomeOne = () => {
  return (
    <>
      <HeaderOne headerTop={true} />
      <main>
        <Hero />
        <About2 />
        <MarqueSection />
        <Service />
        {/* <Project /> */}
        <About />
        <Counter padding={true} />
        {/* <Team /> */}
        <Testimonial padding={false} />
        <Blog />
      </main>
      <FaqArea />
      <FooterOne />
    </>
  );
};

export default HomeOne;
