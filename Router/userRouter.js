const express = require("express")
const router = express.Router()
const { userReg, adminReg, signInUser,  } = require("../Controller/userController")

router.route("/create").post(userReg)
router.route("/createAdmin").post(adminReg)
router.route("/signIn").post(signInUser)

module.exports = router