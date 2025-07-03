import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import about from "../img/about.avif"
import Footer from "../components/Footer.jsx";
import AboutUs from "../components/AboutUs.jsx";
function About () {
    return(
    <>
      <Navbar />
      <Hero 
      cName="hero-mid"
      Front={about}
      title="About"
      btnClass="hide"
      />
      <AboutUs/>
      <Footer/>
    </>
    )
}
export default About;