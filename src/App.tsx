import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

// The root stays true black with no stacking context so the hero video's
// mix-blend-screen can knock out its black background against the page.
export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white selection:bg-[#DBA85A] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
