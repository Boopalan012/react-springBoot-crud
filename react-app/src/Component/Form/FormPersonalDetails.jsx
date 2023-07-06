import React, { Component } from "react";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    if (this.props.validateForm()) {
      this.props.nextStep();
      
    }
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange ,errors} = this.props;
    return (
      <>
        <div>
          <h2>Enter Personal Details</h2>
          <form>
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
                value={values.doorno}
                onChange={handleChange("doorno")}
                placeholder="Enter Your Door No"
                required
              />
              {errors.doorno&& (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <strong class="mx-2">Error!</strong> {errors.doorno}
                </div>
              )}
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
                value={values.street}
                onChange={handleChange("street")}
                placeholder="Enter your Street"
                required
              />
              {errors.street&& (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <strong class="mx-2">Error!</strong> {errors.doorno}
                </div>
              )}
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
                value={values.district}
                onChange={handleChange("district")}
                placeholder="Enter Your Address"
                required
              />
              {errors.district&& (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <strong class="mx-2">Error!</strong> {errors.doorno}
                </div>
              )}
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
                value={values.state}
                onChange={handleChange("state")}
                placeholder="Enter Your Address"
                required
              />
              {errors.state&& (
                <div class="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                  <strong class="mx-2">Error!</strong> {errors.doorno}
                </div>
              )}
            </div>
          </form>

          <button class="btn btn-primary" onClick={this.back}>
            Back
          </button>
          <h1> </h1>

          <button class="btn btn-success" onClick={this.continue}>
            Continue
          </button>
        </div>
      </>
    );
  }
}

export default FormPersonalDetails;
