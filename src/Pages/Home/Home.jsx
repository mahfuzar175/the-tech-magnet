import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import CompanySection from "../../components/CompanySection";
import Contact from "../../components/Contact";
import IntroductionSction from "../../components/IntroductionSction";
import ServiceSection from "../../components/ServiceSection";
import SpacialPackages from "../../components/SpacialPackages";
import OurWorks from "./../../components/OurWorks";
import WhyChooseUs from "./../../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tech Magnet</title>
      </Helmet>
      <Banner></Banner>
      <IntroductionSction></IntroductionSction>
      <ServiceSection></ServiceSection>
      <OurWorks></OurWorks>
      <CompanySection></CompanySection>
      <SpacialPackages></SpacialPackages>
      <WhyChooseUs></WhyChooseUs>
      <Contact></Contact>
    </div>
  );
};

export default Home;
