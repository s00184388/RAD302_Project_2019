import React, { Component } from "react";
import "../Admin/Admin.css";
import { Link } from "react-router-dom";

/* MODULE OBJECT REQUIRE:
name
GPAPercentage
 */

export class CreateModule extends Component {
  displayName = CreateModule.name;
  constructor(props) {
    super(props);
    this.state = {
      moduleName: "",
      GPA: 0,
      lecturer: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    const lecturers = ["Lect 1", "Lect 2", "Lect 3", "Others"];
    const options = lecturers.map(opt => <option key={opt}>{opt}</option>);
    return (
      <div className="col-sm-6 py-2">
        <h5>Create New Module</h5>
        <Link to="/admin">Go Back</Link>
        <hr />

        <form onSubmit={this.handleSubmit}>
          <div className="form-group input-group-sm">
            <label htmlFor="moduleName">Module Name</label>
            <input
              className="form-control"
              name="moduleName"
              type="text"
              id="moduleName"
              onChange={this.handleChange}
              value={this.state.moduleName}
            />
          </div>
          <div className="form-group input-group-sm">
            <label htmlFor="lecturers">Choose a Lecturer for this module</label>
            <select
              id="lecturer"
              name="lecturer"
              className="form-control"
              defaultValue=""
              onChange={this.handleChange}
            >
              <option value={this.state.lecturer} disabled hidden>
                Lecturers
              </option>
              {options}
            </select>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn col-sm-4 btn-sm btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateModule;