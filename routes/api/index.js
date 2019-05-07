const path = require("path");
const router = require("express").Router();
const wineRoutes = require("./Wine");
const restaurantRoutes = require("./Restaurants");
const employeesRoutes = require("./Employees");
const addwineRoutes = require("./Addwine");
const getwineRoutes = require("./Getwine");

router.use("/employees", employeesRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/wine", wineRoutes);

router.use("/addwine", addwineRoutes);

router.use("/getwine", getwineRoutes);




module.exports = router;
