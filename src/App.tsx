import { useState } from 'react';
import IntroModal from './sections/IntroModal';
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import SpecialAndIfood from './sections/SpecialAndIfood';
import Gallery from './sections/Gallery';
import Services from './sections/Services';
import Location from './sections/Location';
import Footer from './sections/Footer';

function App() {
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsIntroModalOpen(false);
  };
  return (
    <>
      {isIntroModalOpen && <IntroModal onClose={handleCloseModal} />}
      {!isIntroModalOpen && (
        <main className="flex min-h-screen flex-col">
          <Header />
          <HeroSection />
          <SpecialAndIfood />
          <Gallery />
          <Services />
          <Location />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
