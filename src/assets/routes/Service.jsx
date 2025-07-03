import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import service from "../img/service.avif"
import Footer from "../components/Footer.jsx";
import Trip from "../components/Trip.jsx";
function Service () {
    return(
        <>
        <Navbar />
        <Hero 
         cName="hero-mid"
         Front={service}
         title="Service"
         btnClass="hide"
        />  
        <Trip/>
        <Footer/>  
        </>
    )
}
export default Service;