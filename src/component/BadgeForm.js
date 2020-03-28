import React from "react";
import "./styles/BadgesForm.css";
class BadgesForm extends React.Component {
 state={
     jobTitle:'Designer'
 };

  handleChange = e => {
    // console.log({ value: e.target.value, name: e.target.name });
    this.setState({
        [e.target.name]:e.target.value,
        
    })
  };
  handleClick = e => {
    console.log("click!!!");
  };

  handleSubmit = e => {
    e.preventDefault();
  console.log(this.state);
  };

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
              name="firstName"
              value={this.state.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>

            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.state.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="email"
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>

            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>

            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.state.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgesForm;
