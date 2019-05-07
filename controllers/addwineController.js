const db = require("../models");

//change MasterWineList to Restaurants to access models Restaurants collection
module.exports = {
    
//----------dms
    update: function(req, res) {
      console.log(req.body);
      db.Restaurants.findOneAndUpdate({}, { $push: { Wines: req.body.Wines } }, { new: true })
      // db.Restaurants.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err));
      },    

      remove: function(req, res) {
        console.log(req.body);

        db.Restaurants.findOneAndUpdate(
          { "Wines._id" : ObjectId(req.body) }, 
          { "$pull": { "Restaurants.$.Wines": req.body } } 
      )
        // db.Restaurants.update(
        //   { _id: req.body },
        //   { $pull: { Wines: req.body  } }
        // )
        // db.Restaurants.findOneAndDelete({}, { $pull: { Wines: req.body.Wines } })
        // db.Restaurants.findOneAndUpdate({ id: req.params.id }, req.body)
         .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err));

        },    


        
      
    
}