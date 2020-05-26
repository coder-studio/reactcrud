// TableRow.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class TableRow extends Component {
  delete = () => {
    axios
      .get("http://localhost:4000/business/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <tr>
        <td>{this.props.obj.person_name}</td>
        <td>{this.props.obj.business_name}</td>
        <td>{this.props.obj.business_gst_number}</td>
        <td>
          <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
