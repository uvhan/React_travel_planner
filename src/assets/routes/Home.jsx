import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Front from "../img/frontpage.avif"
import Destination from "../components/Destination.jsx";
import Trip from "../components/Trip.jsx";
import Footer from "../components/Footer.jsx";
function Home() {
  return (
    <>
      <Navbar />
      <Hero 
      cName="hero"
      Front={Front}
      title="create a backpack, create a journey"
      text="choose a place to free your soul"
      buttonText="Travel plan"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip />
      <Footer/>
    </>
  );
}

export default Home;
