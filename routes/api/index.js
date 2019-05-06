const path = require("path");
const router = require("express").Router();
const wineRoutes = require("./Wine");
const restaurantRoutes = require("./Restaurants");
const employeesRoutes = require("./Employees");


router.use("/employees", employeesRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/wine", wineRoutes);




module.exports = router;
