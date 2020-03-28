import React from "react";
import Navbar from '../component/Navbar';
import header1 from '../images/badges_0.png';
import Badge from '../component/Badges';
import '../component/styles/Header.css';
import foto from '../images/avatar_me.jpg'
import BadgeForm from '../component/BadgeForm'


class BadgeNew extends React.Component{
    render(){
        return(
           <div>
               <Navbar/>
               <div className="BadgesNew__hero">
                  <img className="BadgesNew__hero-img img-fluid" src={header1} alt="logo"/>
               </div>

               <div className="container">
                   <div className="row">
                       <div className="col-6">
                           <Badge firstname="paty" 
                           lastName="valdebenito"
                           twitter="paty"
                           jobTtitle ="FrontDeveloper"
                           avatarMe={foto}/>
                       </div>

                       <div className="col-6">
                           <BadgeForm/>
                       </div>
                   </div>
               </div>


               
           </div>
        )
         
    }
}

export default BadgeNew;
