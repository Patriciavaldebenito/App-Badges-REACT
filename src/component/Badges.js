import React from "react";
import "./styles/Badges.css";



class Badges extends React.Component {
  render() {
    return (
      <div className="Badge">
        
        <div className="Badge__header">
         
        </div>

        <div className="Badge__section-name">
        <img className="Badge__avatar" src={this.props.avatarMe} alt="Avatar" />
          <h1>
            {this.props.firstName} <br />{this.props.lastName}
            
          </h1>
        </div>
        <div className="Badge__section-info">
            <p>{this.props.jobTitle}</p>
    <   div>@{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">
            #aprendiendodeporvida
        </div>
      </div>
    );
  }
}

export default Badges;
