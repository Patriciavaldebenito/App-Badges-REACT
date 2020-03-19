import React from "react";
import "./styles/Badges.css";
import avatarMe from '../images/avatar_me.jpg';


class Badges extends React.Component {
  render() {
    return (
      <div className="Badge">
        
        <div className="Badge__header">
         
        </div>

        <div className="Badge__section-name">
        <img className="Badge__avatar" src={avatarMe} alt="Avatar" />
          <h1>
            Patricia <br />
            Valdebenito
          </h1>
        </div>
        <div className="Badge__section-info">
            <p>Front End Developer</p>
            <div>@valdebenitopanes</div>
        </div>
        <div className="Badge__footer">
            #aprendiendodeporvida
        </div>
      </div>
    );
  }
}

export default Badges;
