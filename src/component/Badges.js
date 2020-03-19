import React from "react";
import backgroundHeader from '../images/background_0_home_badges.jpg';
import avatarMe from '../images/avatar_me.jpg';
class Badges extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src={backgroundHeader} alt="Logo" />
        </div>
        <div>
        <img src={avatarMe} alt="Avatar" />
          <h1>
            Patricia <br />
            Valdebenito
          </h1>
        </div>
        <div>
            <p>Front End Developer</p>
            <p>@valdebenitopanes</p>
        </div>
        <div>
            #aprendiendodeporvida
        </div>
      </div>
    );
  }
}

export default Badges;
