import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhyMe from "./sections/WhyMe";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyMe />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;