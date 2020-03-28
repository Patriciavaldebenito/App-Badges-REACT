import React from "react";
import "./styles/BadgesForm.css";
class BadgesForm extends React.Component {
    handleChange=(e)=>{
        console.log({value: e.target.value,
                     name:e.target.name});
    }
    handleClick=(e) =>{
        console.log("click!!!");
    }

    handleSubmit=e=>{
        e.preventDefault();
        console.log("form was submit");
    }
  render() {
    return (
      <div className="BadgesForm">
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>

            <input 
            onChange={this.handleChange}
            type="text" 
            className="form-control" 
            name="firstName"/>
          </div>

          <button 
           
            onClick={this.handleClick}
            className="btn btn-primary">
                Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgesForm;
