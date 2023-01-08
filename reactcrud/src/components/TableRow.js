import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const TableRow = (props) => {
  const deleteUser = () => {
    console.log(props.obj._id)
    axios
      .delete("http://localhost:5000/api/delete/" + props.obj._id)
      .then(console.log("Deleted"))
      .catch((err) => console.log(err));
  };
  return (
    <tr>
      <td>{props.obj.first_name}</td>
      <td>{props.obj.last_name}</td>
      <td>{props.obj.gmail}</td>
      <td>
        <button className="btn btn-primary">
          <Link to={"/edit/" + props.obj._id} className="btn btn-primary">
            Edit
          </Link>
        </button>
      </td>
      <td>
        <button className="btn btn-danger" onClick={deleteUser}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
