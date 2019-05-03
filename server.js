const express = require('express');
const app = express();
var cors = require('cors');
const db = require('./models');
const wineRoutes = require('./routes/api/Wine')
const PORT = process.env.PORT || 3001;
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/wines"

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/',(req,res)=>(
    db.MasterWineList.find({}).then(Wines=>{
        res.json(Wines)
    })
))

app.post('/',(req,res)=>{
    console.log("req.body:", req.body)
    return (
    db.MasterWineList.create({
        name: req.body.name,
        primaryFlavors: req.body.primaryFlavors.split(','),
        region: req.body.region
    }).then(Wines=>
        res.json(Wines)
    )
)})

app.delete('/:_id',(req,res)=>{
    db.MasterWineList.findById(req.params._id)
      .then(dbWine => dbWine.remove())
      .then(dbWine => res.json(dbWine))
      //if error, catch it and give a 422 response as well as logging the error in the console
      .catch(err => res.status(422).json(err));
})

app.use('/api/wine', wineRoutes)

app.listen(PORT)