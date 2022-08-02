const express = require('express')
const router = express.Router()
const upload = require("../utils/multer")

const { getAll, postBread } = require("../Controller/breadController")

router.route("/post").post(upload, postBread)
router.route("/all").get(getAll)

module.exports = router