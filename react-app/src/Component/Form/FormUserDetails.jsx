import React, { Component } from "react";

export class FormUserDetails extends Component {

  continue = (e) => {
    e.preventDefault();

    if (this.props.validateForm()) {
      this.props.nextStep();
    }
  };

  render() {
    const { values, handleChange, errors } = this.props;

    return (
      <>
        <div>
          <h2>Enter User Details</h2>
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
                value={values.name}
                onChange={handleChange("name")}
                placeholder="Enter Your Name"
                required
              />
              {errors.name && (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <strong class="mx-2">Error!</strong> {errors.name}
                </div>
              )}
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">
                Password
              </label>
            </div>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword3"
                value={values.password}
                onChange={handleChange("password")}
                placeholder="Enter Your Password"
                required
              />
              {errors.password && (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <i class="bi-exclamation-octagon-fill"></i>
                  <strong class="mx-2">Error!</strong> {errors.password}
                </div>
              )}
            </div>
            <div class="form-group row">
              <label for="inputPassword3" class="col-sm-2 col-form-label">
                Email
              </label>
            </div>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control"
                id="inputPassword3"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="Enter Your Email"
                required
              />
              {errors.email && (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <i class="bi-exclamation-octagon-fill"></i>
                  <strong class="mx-2">Error!</strong> {errors.email}
                </div>
              )}
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
                value={values.city}
                onChange={handleChange("city")}
                placeholder="Enter Your city"
                required
              />
              {errors.city && (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <i class="bi-exclamation-octagon-fill"></i>
                  <strong class="mx-2">Error!</strong> {errors.city}
                </div>
              )}
            </div>
          </form>
          <button class="btn btn-success" onClick={this.continue}>
            Continue
          </button>
        </div>
      </>
    );
  }
}

export default FormUserDetails;
