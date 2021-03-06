import Container from 'components/Container';
import DonationCards from 'components/DonationCards';
import HeroSection from 'components/HeroSection';
import LandingSection from 'components/LandingSection';
import { NextPage } from 'next';

const IndexPage: NextPage = () => {
  return (
    <Container>
      <LandingSection />
      <HeroSection />
      <DonationCards />
    </Container>
  );
};

export default IndexPage;
