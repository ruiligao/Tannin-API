const db = require("../models");

//change MasterWineList to Employees to access models Employees collection

module.exports = {
    findAll: function(req, res) {
        db.Employees.find()
          .then(dbEmp => res.json(dbEmp))
          .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Employees.create(req.body)
          .then(dbEmp => res.json(dbEmp))
          .catch(err => res.status(422).json(err));
    },
    
      findById: function(req, res) {
        db.Employees.findById(req.params.id)
          .then(dbEmp => res.json(dbEmp))
          .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Employees.findOneAndUpdate({ id: req.params.id }, req.body)
          .then(dbEmp => res.json(dbEmp))
          .catch(err => res.status(422).json(err));
    },

    remove: function(req, res) {
        db.Employees.findById(req.params.id)
          .then(dbEmp => dbEmp.remove())
          .then(dbEmp => res.json(dbEmp))
          .catch(err => res.status(422).json(err));
    }
}