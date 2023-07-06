import axios from "axios";

const Delete = (props) => {
  const id = props.id;
  console.log(id);

  axios.delete("http://localhost:8080/students/${id}").then((response) => {
    console.log(response.data);
  });
};

export default Delete;
