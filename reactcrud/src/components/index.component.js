import axios from "axios";
import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";
const Index = () => {
  const [listPersons, setListPersons] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/getAll")
      .then((response) => {
        console.log(response.data);
        setListPersons(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  },[]);

  return (
    <>
      <h3 align="center">Persons List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Age</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {listPersons.map(function (object, i) {
            return <TableRow obj={object} key={i} />;
          })}
        </tbody>
      </table>
    </>
  );
};

export default Index;
