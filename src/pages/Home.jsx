import Hero from '../components/Hero';
import AboutOverview from '../components/AboutOverview'; 
import TherapyFor from '../components/TherapyFor';
import ServicesOverview from '../components/ServicesOverview';
import Benefits from '../components/Benefits'; 
import FAQ from '../components/FAQ';
import TakeFirstStep from '../components/Takefirststep';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutOverview />
      <TherapyFor />
      <ServicesOverview />
      <Benefits />
      <FAQ />
      <TakeFirstStep/>
    </>
  );
};

export default Home;