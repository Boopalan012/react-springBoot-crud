import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Edit = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    password: "",
    email: "",
    city: "",
  });
  const [errors, setError] = useState({
    name: "",
    password: "",
    email: "",
    city: "",
  });
  const validateForm = () => {
    let { name, password, email, city } =formData;
    let isValid = true;
    var PasswordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var EmailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    console.log("hi");

    if (!name) {
      setError.name = "name cannot be empty";
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
    setFormData({ errors });
    return isValid;
  };
  const { id } = useParams();

  useEffect(() => {
    fetchStudent(id);
  }, [id]);

  const fetchStudent = (id) => {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((response) => {
        const student = response.data;
        setFormData(student);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
        .put(`http://localhost:8080/students/${id}`, formData)
        .then((response) => {
          console.log("Record updated successfully", response);
          window.location.href="/"
          })
        .catch((error) => {
          console.error("MYError:", error);
        }); 
  
    
  };
  return (
    <>
      {console.log(formData)}
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            readOnly
            className="form-control"
          />
        
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
};

export default Edit;

//
//     componentDidMount(){
//         const { id } =this.props.match.params.id;
//         console.log("id",id);
//        }

//     //
//     fetchData(id) {
//         axios
//         .get(`http://localhost:8080/students/${id}`)
//           .then((response) => {
//             this.setState({student: response.data });
//           })
//           .catch((error) => {
//             console.error("Error:", error);
//           });
//       }
//     render(){
//         const student=this.state;
//         console.log("value->>>>>",student);
//         return(
//            <>
//            <h1>shs</h1>

//            { student ?(<UserForm initialValue={student} onSubmit={this.handleSubmit}/>):(<h1> load</h1>)}
//            </>

//             );
//     }
// }
