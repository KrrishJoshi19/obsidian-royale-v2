import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhyMe from "./sections/WhyMe";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";


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
    </>
  );
}

export default App;