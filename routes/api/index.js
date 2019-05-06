const path = require("path");
const router = require("express").Router();
const wineRoutes = require("./Wine");
const restaurantRoutes = require("./Restaurants");
<<<<<<< HEAD
const  employeesRoutes = require("./Employees");
const signupLoginRoutes = require("./signupLogin");

//naming the routes; using the books.js and google.js routes file

//the API.js will hit these routes once activitated by client/ user
// router.use("/google", googleRoutes);
// router.use("/books", bookRoutes);
router.use("/user", signupLoginRoutes);
=======
const employeesRoutes = require("./Employees");
const addwineRoutes = require("./Addwine");

>>>>>>> 720c0608a071cdbe295fbe03de7526c36ad6d7a0
router.use("/employees", employeesRoutes);
router.use("/restaurant", restaurantRoutes);
router.use("/wine", wineRoutes);

router.use("/addwine", addwineRoutes);





module.exports = router;
