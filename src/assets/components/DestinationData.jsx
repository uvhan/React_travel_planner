import { Component } from 'react'
import './destination.css'
import bali1 from "../img/bali1.avif"
import bali2 from "../img/bali2.avif"
import bali3 from "../img/bali3.avif"
import bali4 from "../img/bali4.avif"

class DestinationData extends Component{
  render(){
      return (
        <>
            <div className={this.props.className}>
                <div className="image1">
                  <img src={this.props.img1} alt="img" />
                  <img src={this.props.img2} alt="img" />
                </div>
                <div className="des-text">
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
            </div>
        </>
        )
}
}

export default DestinationData
