import React, { Component } from "react";
import { Link } from "react-router-dom";

export class TableRow extends Component {
  render() {
    const row = this.props.row;
    return (
      <tr className="text-center">
        <th scope="row" />
        <td>{row.name}</td>
        <td>
          <Link to="/createAttendance" className="btn btn-primary btn-sm">
            Create Attendance
          </Link>
        </td>

        <td>
          <Link to="/createAssessment" className="btn btn-primary btn-sm">
            Create Assessment
          </Link>
        </td>
        <td>
          <Link to="/addResult" className="btn btn-primary btn-sm">
            Add Result
          </Link>
        </td>
      </tr>
    );
  }
}

export class Lecturer extends Component {
  displayName = Lecturer.name;

  componentDidMount() {
    fetch("https://localhost:44342/api/Modules").then(res => res.json());
  }

  render() {
    return (
      <div>
        <h5>Hello, Lecturer!</h5>
        <div className="row">
          <div className="col-sm-8">
            <div className="d-flex justify-content-start">
              <h6>Modules List</h6>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="d-flex justify-content-end">
              <Link to="/">Go Home</Link>
            </div>
          </div>
        </div>

        <hr />

        <table className="table table-hover table-sm table-stripped">
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">Module ID</th>
              <th scope="col-3">Module Name</th>
              <th scope="col-3">Create Attendance</th>
              <th scope="col-3">Create Assesment</th>
              <th scope="col-3">Add Result</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

export default Lecturer;
