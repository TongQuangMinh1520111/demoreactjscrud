import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const Edit = (props) => {
  let  {id} = useParams();
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    gmail: "",
  });

  const inputsHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/edit/" + id)
      .then((response) => {
        setInputField(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = inputField;
    axios
      .post(
        "http://localhost:5000/api/update/" + id,
        obj
      )
      .then((res) => console.log(res.data));
  };

  return (
    <>
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Person Info</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Person Name: </label>
            <input
              type="text"
              name="first_name"
              className="form-control"
              value={inputField.first_name}
              onChange={inputsHandler}
            />
          </div>
          <div className="form-group">
            <label>Company Name: </label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              value={inputField.last_name}
              onChange={inputsHandler}
            />
          </div>
          <div className="form-group">
            <label>Gmail: </label>
            <input
              type="text"
              name="gmail"
              className="form-control"
              value={inputField.gmail}
              onChange={inputsHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Update Person Info"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Edit;
