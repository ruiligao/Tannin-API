// Require mongoose

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    email: {
        type: String
    },
    Wines: {
        type: Array
    },
    Employees: {
        type: Array
    }
});

var Restaurants = mongoose.model("Restaurants", RestaurantSchema);

module.exports = Restaurants;