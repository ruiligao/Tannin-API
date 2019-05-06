const db = require("../models");

//change MasterWineList to Restaurants to access models Restaurants collection
module.exports = {
    
//----------dms
    update: function(req, res) {
      db.Restaurants.findOneAndUpdate({}, { $push: { Wines: req._id } }, { new: true })
      // db.Restaurants.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err));
      },    
    
}