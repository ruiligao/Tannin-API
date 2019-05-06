const path = require("path");
const router = require("express").Router();
// const bookRoutes = require("./books");
// const googleRoutes = require("./google");
const wineRoutes = require("./Wine");
const restaurantRoutes = require("./Restaurants");
const  employeesRoutes = require("./Employees");
const signupLoginRoutes = require("./signupLogin");

//naming the routes; using the books.js and google.js routes file

//the API.js will hit these routes once activitated by client/ user
// router.use("/google", googleRoutes);
// router.use("/books", bookRoutes);
router.use("/user", signupLoginRoutes);
router.use("/employees", employeesRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/wine", wineRoutes);




module.exports = router;
