const express = require('express')
const {checkExist} = require("../middlewares/validations/checkExist")
const {station} = require("../models")
const {createStation, getAllStation, getDetailtStation, updateStation, deleteStation} = require("../controllers/station.controllers")
const {authenticate} = require("../middlewares/auth/authenticate")
const {authorize} = require("../middlewares/auth/authorize")
const stationRouter = express.Router()

stationRouter.post("/",authenticate,authorize(["ADMIN"]), createStation)
stationRouter.get("/",authenticate, getAllStation)
stationRouter.get("/:id",checkExist(station),getDetailtStation)
stationRouter.put("/:id",checkExist(station),authenticate,authorize(["ADMIN"]), updateStation)
stationRouter.delete("/:id",checkExist(station),authenticate,authorize(["ADMIN"]), deleteStation)
module.exports = {stationRouter}