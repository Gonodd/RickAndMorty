//const { Router } = require("express");
const getCharById = require("../controllers/getCharById")
const validate = require("../controllers/login")
const { postFav, deleteFav } = require("../controllers/handleFavorites")

const router = require("express").Router();

router.get("/character/:id", getCharById)
router.get("/login", validate)
router.post("/fav", postFav)
router.delete("/fav/:id", deleteFav)

module.exports = router;