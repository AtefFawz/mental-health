import "./App.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Therapists from "./pages/Therapists";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <div
        className="container mx-auto px-2 md:space-y-25  space-y-15
      flex justify-around flex-col overflow-hidden"
      >
        <Navbar />
        <Home />
        <About />
        <Services />
        <Therapists />
        <Resources />
        <Community />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
