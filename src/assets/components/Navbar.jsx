import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
const Menuitems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "fa-solid fa-igloo"
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info"
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: "fa-solid fa-briefcase"
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: "fa-solid fa-address-card"
  },
  {
    title: "Sign Up",
    url: "/signup",
    cName: "nav-links-mobile",
  },
];

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Vibe×Tribe</h1>
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menuitems.map((item, index) => (
            <li key={index} >
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i> {item.title}
              </Link>
            </li>
          ))}
          <button>sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
