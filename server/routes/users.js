const express = require("express");
const bcrypt = require("bcrypt");
const Users = require("../modals/users");
const users = express.Router();
const jwt = require("jsonwebtoken");
//register Method
users.post("/register", (req, res) => {
  let users = new Users(req.body);
  bcrypt
    .hash(req.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      users.password = hashedPassword;

      // save the new user
      users
        .save()
        // return success if the new user is added to the database successfully
        .then((result) => {
          res.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          res.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      res.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

//login

users.post("/login", async (req, res) => {
  try {
    let user = await Users.findOne({
      email: req.body.email,
    });

    if (!user) {
      return res.status(401).send({
        message: "User not found",
      });
    }

    let comparePass = await bcrypt.compare(req.body.password, user.password);

    if (comparePass) {
      //   create JWT token
      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
      );

      // convert return schema object to Json obj
      // let user = user.toJSON();

      const { password, ...userData } = user.toJSON();
      //   return success response
      return res.status(200).send({
        message: "Login Successful",
        user: userData,
        token,
      });
    } else {
      return res.status(400).send({
        message: "Passwords does not match",
        error,
      });
    }
  } catch (err) {
    console.log("🚀 ~ file: users.js:62 ~ users.post ~ err", err);
    res.status(400).send({
      message: err.message,
    });
  }

  console.log("test test");
  res.send({
    success: false,
  });
});

users.post("/checktoken", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(500).send({
      message: "token was not hashed successfully",
      error,
    });
  }
});

module.exports = users;
