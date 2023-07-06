import React, { Component } from "react";
import axios from "axios";
import Index from "../Index";
import { Link } from "react-router-dom";

class Confirm extends Component {
  submit = async (e) => {
    e.preventDefault();
    const {
      values: { name, password, email, city, doorno, street, district, state },
    } = this.props;
    const formData = {
      name: name,
      password: password,
      email: email,
      city: city,
      address: [
        {
          doorno: doorno,
          street: street,
          district: district,
          state: state,
        },
      ],
    };
    console.log(formData);
    try {
      const response = await axios
        .post("http://localhost:8080/students", formData)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/";
        });
    } catch (error) {
      console.error(error);
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, password, email, city, doorno, street, district, state },
    } = this.props;

    return (
      <>
        <h1> User Data</h1>
        <form>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Name
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={name}
              readOnly
            />
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Password
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={password}
              readOnly
            />
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Email
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={email}
              readOnly
            />
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              City
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={city}
              readOnly
            />
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Door No
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={doorno}
              readOnly
            />
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Street
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={street}
              readOnly
            />
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              District
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={district}
              readOnly
            />
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              State
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputPassword3"
              placeholder={state}
              readOnly
            />
          </div>
        </form>

        <br />

        <button class="btn btn-primary" onClick={this.back}>
          Back
        </button>
        <h1></h1>
        <button class="btn btn-success btn-lg" onClick={this.submit}>
          Submit
        </button>
      </>
    );
  }
}

export default Confirm;
