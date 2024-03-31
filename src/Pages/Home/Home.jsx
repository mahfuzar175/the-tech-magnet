import Banner from "../../components/Banner";
import CompanySection from "../../components/CompanySection";
import Contact from "../../components/Contact";
import IntroductionSction from "../../components/IntroductionSction";
import ServiceSection from "../../components/ServiceSection";
import SpacialPackages from "../../components/SpacialPackages";
import OurWorks from './../../components/OurWorks';
import WhyChooseUs from './../../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IntroductionSction></IntroductionSction>
            <ServiceSection></ServiceSection>
            <CompanySection></CompanySection>
            <OurWorks></OurWorks>
            <SpacialPackages></SpacialPackages>
            <WhyChooseUs></WhyChooseUs>
            <Contact></Contact>
        </div>
    );
};

export default Home;