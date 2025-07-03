import bali1 from "../img/bali1.avif"
import bali2 from "../img/bali2.avif"
import bali3 from "../img/bali3.avif"
import bali4 from "../img/bali4.avif"
import './destination.css'
import DestinationData from "./DestinationData"

const Destination = () => {
  return (
    <div className="destination">
        <h1>popular destinations</h1>
        <p>Tours give you memories</p>
        <DestinationData
        className="first-des"
        heading="Bali,Indonasia"
        text="Bali, Indonesia is a world-renowned tropical island paradise known for its lush landscapes, vibrant culture, and stunning beaches. Located in Southeast Asia, Bali offers a unique blend of ancient temples, terraced rice fields, volcanic mountains, and warm hospitality. alike — with hotspots like Ubud for wellness retreats and Seminyak for beach clubs and nightlife. Rich in tradition and natural beauty, Bali seamlessly combines relaxation, adventure, and cultural experiences world."
        img1={bali1}
        img2={bali2}
        />
        <DestinationData
        className="first-des-reverse"
        heading="Thai,thailand"
        text="Thailand is a vibrant and diverse country in Southeast Asia, famous for its golden temples, tropical beaches, rich cultural heritage, and flavorful cuisine. Known as the 'Land of Smiles Thailand offers something for every traveler from the bustling city life of Bangkok, with its street markets and grand palaces, to the serene islands of Phuket, Krabi, and Koh Samui, known for turquoise waters and white sand'."
        img1={bali3}
        img2={bali4}
        />
    </div>
  )
}

export default Destination