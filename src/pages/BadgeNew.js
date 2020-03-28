import React from "react";
import Navbar from '../component/Navbar';
import header1 from '../images/badges_0.png';
import Badge from '../component/Badges';
import '../component/styles/Header.css';
import foto from '../images/avatar_me.jpg'
import BadgeForm from '../component/BadgeForm'


class BadgeNew extends React.Component{
    state={  form:{
        firstname:'',
        lastName:'',
        email:'',
        jobTtitle:'',
        twitter:''
    }  };

    handleChange = e => {
        const nextForm = this.state.form;
        nextForm[e.target.name]=e.target.value;
       
        this.setState({
        //    form:nextForm
       form:{
           ...this.state.form,
           [e.target.name]:e.target.value,
       }
           
        })
    }

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
                           <Badge 
                           firstName={this.state.form.firstName}
                           lastName={this.state.form.lastName}
                           twitter={this.state.form.twitter}
                           jobTitle ={this.state.form.jobTitle}
                           email={this.state.form.email}
                           avatarMe={foto}/>
                       </div>

                       <div className="col-6">
                           <BadgeForm 
                           onChange={this.handleChange}
                           formValues={this.state.form}/>
                       </div>
                   </div>
               </div>


               
           </div>
        )
         
    }
}

export default BadgeNew;
