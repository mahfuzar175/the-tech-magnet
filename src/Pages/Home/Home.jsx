import Banner from "../../components/Banner";
import IntroductionSction from "../../components/IntroductionSction";
import ServiceSection from "../../components/ServiceSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <IntroductionSction></IntroductionSction>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;