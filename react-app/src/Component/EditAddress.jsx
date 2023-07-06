import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditAddress = () => {
  const [address, setAddress] = useState({
    doorno: "",
    street: "",
    district: "",
    state: "",
    students: "",
  });
  console.log(address);

  const { id } = useParams();

  useEffect(() => {
    fetchStudent(id);
  }, [id]);

  const fetchStudent = (id) => {
    axios
      .get(`http://localhost:8080/EditAddress/${id}`)
      .then((response) => {
        const student = response.data;
        setAddress(student);
        console.log(address);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.log(address);
  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("jhsjj");
    axios
      .put(`http://localhost:8080/EditAddress/${id}`, address)
      .then((response) => {
        console.log("Record updated successfully", response);
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("MYError:", error);
      });
  };

  return (
    <div>
      <div>
        <h2>Enter Personal Details</h2>
        <form onChange={handleChange}>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">
              Door No
            </label>
          </div>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Your Door No"
              required
              name="doorno"
              value={address.doorno}
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
              placeholder="Enter your Street"
              required
              value={address.street}
              name="street"
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
              placeholder="Enter Your Address"
              required
              value={address.district}
              name="district"
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
              placeholder="Enter Your Address"
              required
              value={address.state}
              name="state"
            />
          </div>

          <button class="btn btn-success" onClick={(e) => handleSubmit()}>
            Sumbit
          </button>
        </form>
      </div>
    </div>
  );
};
export default EditAddress;
