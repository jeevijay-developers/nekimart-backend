const express = require("express");
const { registerVendor, getvendors } = require("../controller/vendorController.js");

const router = express.Router()

router.post("/register", registerVendor);
router.get("/getvendors", getvendors);
module.exports = router;
