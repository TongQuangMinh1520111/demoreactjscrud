const express = require("express");
const router = express.Router();
const Person = require("../modals/persons");
//Post Method
router.post("/post", async (req, res) => {
  // const data = new Person({
  //     first_name: req.body.first_name,
  //     last_name: req.body.last_name,
  //     gmail: req.body.gmail
  // })

  // try {
  //     const dataToSave = await data.save();
  //     res.status(200).json(dataToSave)
  // }
  // catch (error) {
  //     res.status(400).json({message: error.message})
  // }

  let person = new Person(req.body);
  person
    .save()
    .then((person) => {
      res.status(200).json({ person: "person in added successfully" });
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});

//Get all Method
router.get("/getAll", (req, res) => {
  Person.find(function (err, persons) {
    if (err) {
      console.log(err);
    } else {
      res.json(persons);
    }
  });
});

//Get by ID Method
router.get("/edit/:id", (req, res) => {
  let id = req.params.id;
  Person.findById(id, function (err, business) {
    res.json(business);
  });
});

//  Defined update route

router.post("/update/:id", (req, res) => {
  Person.findById(req.params.id, function (err, person) {
    if (!person) res.status(404).send("data is not found");
    else {
      console.log(person);
      person.first_name = req.body.first_name;
      person.last_name = req.body.last_name;
      person.gmail = req.body.gmail;
      person
        .save()
        .then((business) => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});


//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

module.exports = router;
