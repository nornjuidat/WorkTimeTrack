const express = require("express");
const router = express.Router();

const attendance_R = require("./attendance_R");

router.use("/attendance", attendance_R);

module.exports = router;