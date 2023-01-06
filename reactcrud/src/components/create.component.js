import axios from "axios";
import React, { useState } from "react";

const Create = () => {
  const [inputField, setInputField] = useState({
    first_name: "",
    last_name: "",
    gmail: "",
  });
  const inputsHandler = (e) => {
    setInputField({...inputField, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const obj = inputField;
    axios.post('http://localhost:5000/api/post', obj)
    .then(res => console.log(res.data));
    console.log(obj)
  };

  return (
    <div>
      <div style={{ marginTop: 10 }}>
        <h3>Add New Business</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Add First Name: </label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              onChange={inputsHandler}
            />
          </div>
          <div className="form-group">
            <label>Add Last Name: </label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              onChange={inputsHandler}
            />
          </div>
          <div className="form-group">
            <label>Add Email: </label>
            <input
              name="gmail"
              type="text"
              className="form-control"
              onChange={inputsHandler}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
