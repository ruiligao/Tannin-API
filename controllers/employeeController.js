const db = require("../models");

//change MasterWineList to Employees to access models Employees collection

module.exports = {
  findAll: function (req, res) {
    db.Employees.find()
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
    db.Employees.create(req.body)
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
    db.Employees.findById(req.params.id)
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
    db.Employees.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
    db.Employees.findById(req.params.id)
      .then(dbEmp => dbEmp.remove())
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err));
  },

  addScore: function (req, res) {
    const { userId, wine, score } = req.body;
    console.log("?????????????????????")
    console.log(req.body);
    console.log("SCORE " + wine)
    db.Employees.findOneAndUpdate({ _id: userId }, { $push: { scores: { wine: wine, score: score }}}, {new: true})
      .then(data=> {
        console.log(data);
      res.json(data);
      });
  }
}