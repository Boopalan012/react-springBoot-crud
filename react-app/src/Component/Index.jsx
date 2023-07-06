import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ViewStudent from "./viewStudent";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      viewStudent: [],
    };
  }
  //componentDidmount for get
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        this.setState({ data: response.data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  //handle delete button
  handleDelete(id) {
    alert("Are you sure want to delete?");

    axios
      .delete(`http://localhost:8080/students/${id}`)
      .then((response) => {
        console.log("Record deleted successfully");
        this.fetchData(); //fetch again
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  //view handle
  handleView(student) {
    console.log("button is clicked");
    this.setState({ viewStudent: student });
    <ViewStudent student={ViewStudent} />;
  }

  render() {
    const { data, viewStudent } = this.state;

    return (
      <>
        <div class="container-fluid">
          <div className="card-body">
            <Link to="/AddStudent">
              <button className="btn btn-primary btn-lg">Add Student</button>
            </Link>
            <table className="table table-hover table-light">
              <thead class="thead-light">
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Password</th>
                  <th scope="col">Email</th>
                  <th scope="col">City</th>
                  <th scope="col"> Add Address</th>
                  <th scope="col">View</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody class="table-info">
                {data.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.password}</td>
                    <td>{item.email}</td>
                    <td>{item.city}</td>
                    <td>
                      <Link to={`/Address/${item.id}`}>
                        <button class="btn btn-dark">Address</button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/students/${item.id}`}>
                        <button class="btn btn-warning">View</button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/AddStudent/${item.id}`}>
                        <button className="btn btn-success">Update</button>
                      </Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.map((student) => (
              <tr key={student.id}></tr>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Index;
