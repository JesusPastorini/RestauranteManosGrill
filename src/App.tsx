import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpecialAndIfood from './components/SpecialAndIfood';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <SpecialAndIfood />
      <Gallery />
      <Services />
      <Location />
      <Footer />
    </main>
  );
}

export default App;
