const express = require("express");
const router = express.Router();

const {
  login,
  register
} = require('../../taskbackend/controllers/authcontroller');

router.post("/register", register);
router.post("/login", login);

module.exports = router;