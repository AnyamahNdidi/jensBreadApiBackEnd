const express = require("express")
const router = express.Router()

const { postDetaild } = require("../Controller/detailsController")

router.route("/detail/post").post(postDetaild)

module.exports = router