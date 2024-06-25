import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpecialDish from './components/SpecialDish';
import IfoodSection from './components/IfoodSection';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <SpecialDish />
      <IfoodSection />
      <Gallery />
      <Services />
      <Location />
      <Footer />
    </main>
  );
}

export default App;
