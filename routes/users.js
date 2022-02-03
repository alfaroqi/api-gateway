const express = require("express");
const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const userHandler = require("./handler/users");

router.post("/register", userHandler.register);
router.post("/login", userHandler.login);
router.put("/", verifyToken, userHandler.update);
router.get("/", verifyToken, userHandler.getUser);

module.exports = router;
