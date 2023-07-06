import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      id: "",
      name: "",
      password: "",
      email: "",
      city: "",
      doorno: "",
      street: "",
      district: "",
      state: "",
      errors: {
        name: "",
        password: "",
        email: "",
        city: "",
        doorno: "",
        street: "",
        district: "",
        state: "",
      },
    };
  }

  validateForm = () => {
    const { name, password, email, city, doorno, street, district, state ,step} =
      this.state;
    let errors = {};
    let isValid = true;
    var PasswordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var EmailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (!name) {
      errors.name = "name cannot be empty";
      isValid = false;
    }
    if (!EmailReg.test(email)) {
      errors.email = "Email must be valid address";
      isValid = false;
    }
    if (!PasswordReg.test(password)) {
      errors.password = "Password Must 8 letters 1 capital and 1 special chars";
      isValid = false;
    }
    if (!city) {
      errors.city = "City cannot be empty";
      isValid = false;
    }
    if (!doorno&&step==2) {
      errors.doorno = " Column cannot be empty";
      isValid = false;
    }
    if (!street&&step==2) {
      errors.street = " Column cannot be empty";
      isValid = false;
    }
    if (!district&&step==2) {
      errors.district = " Column cannot be empty";
      isValid = false;
    }
    if (!state&&step==2) {
      errors.state= " Column cannot be empty";
      isValid = false;
    }
    
    this.setState({ errors });
    return isValid;
  };
  // next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { errors } = this.state;
    const { name, password, email, city, doorno, street, state, district } =
      this.state;
    const values = {
      name,
      password,
      email,
      city,
      doorno,
      street,
      state,
      district,
    };

    if (document.readyState == "complete") {
      console.log("page loaded");
    }

    switch (step) {
      case 1:
        return (
          //1st form component load
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            validateForm={this.validateForm}
            errors={errors}
          />
        );
      //2nd
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            validateForm={this.validateForm}
            errors={errors}


          />
        );
      //3rd
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
    }
  }
}

export default UserForm;
