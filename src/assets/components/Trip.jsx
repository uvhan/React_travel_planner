import "./trip.css"
import React from 'react'
import TripData from "./TripData"
import bali1 from "../img/bali1.avif"
import bali2 from "../img/bali2.avif"
import bali3 from "../img/bali3.avif"
import bali4 from "../img/bali4.avif"

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using gmaps</p>
        <div className="tripcard">
            <TripData
            img1={bali1}
            heading="Trip to thai"
            text="In the north, cities like Chiang Mai and Pai offer misty mountains, traditional villages, and spiritual retreats. Thailand is also known for its friendly locals, colorful festivals, and a deep-rooted Buddhist culture. Whether you're into."
            />
            <TripData
            img1={bali2}
            heading="Trip to india"
            text="In the north, cities like Chiang Mai and Pai offer misty mountains, traditional villages, and spiritual retreats. Thailand is also known for its friendly locals, colorful festivals, and a deep-rooted Buddhist culture. Whether you're into."
            />
            <TripData
            img1={bali3}
            heading="Trip to Bali"
            text="In the north, cities like Chiang Mai and Pai offer misty mountains, traditional villages, and spiritual retreats. Thailand is also known for its friendly locals, colorful festivals, and a deep-rooted Buddhist culture. Whether you're into."
            />
        </div>
    </div>
  )
}

export default Trip