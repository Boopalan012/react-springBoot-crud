import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    fetchStudent(id);
  }, [id]);

  const fetchStudent = (id) => {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((response) => {
        setStudent(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (!student) {
    return <div>Loading........................</div>;
  }
  function backOnclick() {
    console.log("button clicked");
    window.location.pathname = "/";
  }
  const addressDelete = (count, id) => {
    console.log(count);
    console.log(id);
    axios
      .delete(`http://localhost:8080/address/${count}`)
      .then((resp) => {
        console.log("deleted");
        window.location.pathname = `students/${id}`;
      })

      .catch((error) => {
        console.log(error, "=error");
      });
  };
  if (document.readyState == "complete") {
    console.log("reloaded");
  }

  return (
    <div>
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
      <h2> Student Address</h2>
      <div>
        <table class="table table-sm">
          <thead class="thead-light">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Door Number</th>
              <th scope="col">Street</th>
              <th scope="col">District</th>
              <th scope="col">State</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {student.address.map((address) => (
              <tr class="table-success">
                <th scope="row">{student.id}</th>
                <td>{address.doorno}</td>
                <td>{address.street}</td>
                <td>{address.district}</td>
                <td>{address.state}</td>
                <td>
                  <Link
                    to={{
                      pathname: `/EditAddress/${address.count}`,
                      state: "hello-",
                    }}
                  >
                    <button class="btn btn-info">Edit</button>
                  </Link>
                  <button
                    class="btn btn-danger"
                    onClick={() => addressDelete(address.count, student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button class="btn btn-dark" onClick={() => backOnclick()}>
        Back
      </button>
      <div class="spinner-grow" role="status">
        <span class="sr-only">Lo</span>
      </div>
    </div>
  );
};
export default ViewStudent;

// import React from "react";
// import axios from "axios";

// class ViewStudent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       student: null,
//     };
//   }

//   componentDidMount() {
//     const { id } = this.props;
//     console.log(this.props.id);
//     this.fetchStudent(id);
//   }

//   fetchStudent(id) {
//     axios
//       .get(`http://localhost:8080/students/${id}`)
//       .then((response) => {
//         this.setState({ student: response.data });
//         console.log(id);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }

//   render() {
//     const { student } = this.state;

//     if (!student) {
//       return <div>Loading...</div>;
//     }

//     return (
//       <div>
//         <h1>Student Details</h1>
//         <p>ID: {student.id}</p>
//         <p>Name: {student.name}</p>
//         <p>Password: {student.password}</p>
//         <p>Email: {student.email}</p>
//         <p>City: {student.city}</p>
//         {/* Render additional student details here */}
//       </div>
//     );
//   }
// }

// export default ViewStudent;
