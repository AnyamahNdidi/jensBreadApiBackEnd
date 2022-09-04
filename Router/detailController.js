const express = require("express")
const router = express.Router()

const { postDetaild, getSingleOrder, getAllOrder,updateDispatch } = require("../Controller/detailsController")

router.route("/detail/post").post(postDetaild)
router.route("/single/order/:id").get(getSingleOrder)
router.route("/allorder").get(getAllOrder)
router.route("/update/dispatch/:id").patch(updateDispatch)

module.exports = router