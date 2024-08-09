import "./App.css";
import AboutUs from "./components/AboutUs";
import Architexture from "./components/Architexture";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import House from "./components/House";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="home-menu">
        <Navbar />
        <Header />
      </div>
      <Company />
      <Section />
      <Location />
      <Architexture />
      <Products />
      <Contact />
      <House />
      <AboutUs />
      <Footer />
    </>
  );
}

export default App;
