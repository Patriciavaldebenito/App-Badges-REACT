import React from "react";
import "./styles/BadgesForm.css";
class BadgesForm extends React.Component {
//  state={};

//   handleChange = e => {
//     // console.log({ value: e.target.value, name: e.target.name });
//     this.setState({
//         [e.target.name]:e.target.value,
        
//     })
//   };
  handleClick = e => {
    console.log("click!!!");
  };

  handleSubmit = e => {
    e.preventDefault();
  console.log(this.state)
  };

  render() {
    return (
      <div className="BadgesForm">
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>

            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="firstName"
              value={this.props.formValues.firstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>

            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="lastName"
              value={this.props.formValues.lastName}
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="email"
              value={this.props.formValues.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>

            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="jobTitle"
              value={this.props.formValues.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>

            <input
              onChange={this.props.onChange}
              type="text"
              className="form-control"
              name="twitter"
              value={this.props.formValues.twitter}
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
