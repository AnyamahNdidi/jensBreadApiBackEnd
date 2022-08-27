const express = require("express")
const router = express.Router()

const { postDetaild, getSingleOrder } = require("../Controller/detailsController")

router.route("/detail/post").post(postDetaild)
router.route("/single/order/:id").get(getSingleOrder)

module.exports = router