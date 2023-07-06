import { Await, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Address = () => {
  const { id } = useParams();
  const [student, setStudent] = useState("");
  const [doorno, setDoorno] = useState("");
  const [street, setStreet] = useState("");
const [district, setDistrict] = useState("");
const [state, setState] = useState("");
const [errors ,setError]=useState({
  doorno:"",
  street:"",
  district:"",
  state:"",
})

const validation=()=>{
  let isValid=true;
  if (!doorno) {
    isValid=false;
  }
  if (!street) {
    isValid=false;
  }
  if (!district) {
    isValid=false;
  }
  if (!state) {
    isValid=false;
  }

  return isValid;
}

  useEffect(() => {
    fetchStudent(id);
  }, [id]);

  const fetchStudent = (id) => {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((response) => {
        setStudent(response.data);
        console.log("response->", response);
      })
      .catch((error) => {
        console.error("Error=>:", error);
      });
  };
  const submitHandle = async () => {
    if (validation()) {
      console.log("submit clicked");
    const formData = {
      name: student.name,
      password: student.password,
      email: student.email,
      city: student.city,
      address: [
        {
          doorno: doorno,
          street: street,
          district: district,
          state: state,
        },
      ],
    };
    try {
      const response = await axios
        .put(`http://localhost:8080/students/${id}`, formData)
        .then((response) => {
          console.log(response.data);
          window.location.href = "/";
        });
    } catch (error) {
      console.error(error);
    }
  };
      
    }
  return (
    <>
      <div>
        <h1> Student Details</h1>
        <table class="table table-bordered">
          <thead class="bg-info">
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody className="table-success">
            <tr>
              <td>{student.name}</td>
              <td>{student.password}</td>
              <td>{student.email}</td>
              <td>{student.city}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
              value={doorno}
              onChange={(e) => setDoorno(e.target.value)}
              placeholder="Enter Your Door No"
              required
            />
            {errors.doorno&&<h1>lll</h1>}
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
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              placeholder="Enter your Street"
              required
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
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Enter Your Address"
              required
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
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="Enter Your Address"
              required
            />
          </div>
        </form>
        <button class="btn btn-success" onClick={submitHandle}>
          Submit
        </button>
      </div>
    </>
  );
};
export default Address;
