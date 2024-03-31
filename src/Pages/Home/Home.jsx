import Banner from "../../components/Banner";
import CompanySection from "../../components/CompanySection";
import IntroductionSction from "../../components/IntroductionSction";
import ServiceSection from "../../components/ServiceSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IntroductionSction></IntroductionSction>
            <ServiceSection></ServiceSection>
            <CompanySection></CompanySection>
        </div>
    );
};

export default Home;