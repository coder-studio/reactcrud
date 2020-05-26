import React from "react";
import axios from "axios";

export default class Create extends React.Component {
  constructor() {
    super();

    this.state = {
      person_name: "",
      business_name: "",
      business_gst_number: "",
    };
  }

  onChangeField = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const obj = {
      person_name: this.state.person_name,
      business_name: this.state.business_name,
      business_gst_number: this.state.business_gst_number,
    };
    axios
      .post("http://localhost:4000/business/add", obj)
      .then((res) => console.log(res.data));

    this.setState({
      person_name: "",
      business_name: "",
      business_gst_number: "",
    });
  };

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>
        <form onSubmit={this.onSubmitForm}>
          <div className="form-group">
            <label>Add Person Name: </label>
            <input
              type="text"
              className="form-control"
              name="person_name"
              value={this.state.person_name}
              onChange={this.onChangeField}
            />
          </div>
          <div className="form-group">
            <label>Add Business Name: </label>
            <input
              type="text"
              className="form-control"
              name="business_name"
              value={this.state.business_name}
              onChange={this.onChangeField}
            />
          </div>
          <div className="form-group">
            <label>Add GST Number: </label>
            <input
              type="text"
              className="form-control"
              name="business_gst_number"
              value={this.state.business_gst_number}
              onChange={this.onChangeField}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
