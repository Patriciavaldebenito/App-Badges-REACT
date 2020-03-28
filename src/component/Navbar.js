import React from "react";
// import logo from '../images/logo.png';
import "./styles/Navbar.css";
// get our fontawesome imports
import { faIdBadge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
          <div className="container-fluid">
              
        <a className="Navbar__brand" href="/">
          <FontAwesomeIcon icon={faIdBadge} className="Navbar__brand-logo"/>

          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold"> Conf</span>
        </a>
          </div>

      </div>
    );
  }
}

export default Navbar;
//<img className="Badge__logo" src={logo} alt="Logo"/>
