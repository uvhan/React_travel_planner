import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import contact from "../img/contact.avif"
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactPage.jsx";
function Contact () {
    return(
        <>
        <Navbar />
        <Hero 
         cName="hero-mid"
         Front={contact}
         title="Contact"
         btnClass="hide"
        />    
        <ContactForm/>
        <Footer/>
        </>
    )
}
export default Contact;