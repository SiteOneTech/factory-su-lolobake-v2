import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import About from './components/About';
import Occasions from './components/Occasions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-cream">
        <Header />
        <main>
          <Hero />
          <Trust />
          <About />
          <Occasions />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
