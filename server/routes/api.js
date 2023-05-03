const express = require("express");

const dataController = require("../controllers/dataController");
const router = express.Router();

router.post("/getDistance", dataController.getDistance);
router.post("/getSolutions", dataController.getSolutions);
module.exports = router;