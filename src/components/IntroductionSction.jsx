import Container from "../Pages/Shared/Container/Container";
import backgroundImage from '../assets/images/rm380-10.jpg'
import VideoIntro from "./VideoIntro";

const IntroductionSction = () => {
  return (
    <div className="p-12"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover', // Optional: Adjust to your needs
        backgroundPosition: 'center', // Optional: Adjust to your needs
        // Add more background properties as needed
      }}
    >
      <div>
        <Container>
            <VideoIntro></VideoIntro>
        </Container>
      </div>
    </div>
  );
};

export default IntroductionSction;
