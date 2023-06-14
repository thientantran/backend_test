const express = require('express')
const {checkExist} = require("../middlewares/validations/checkExist")
const {station} = require("../models")
const {createStation, getAllStation, getDetailtStation, updateStation, deleteStation} = require("../controllers/station.controllers")

const stationRouter = express.Router()

stationRouter.post("/", createStation)
stationRouter.get("/", getAllStation)
stationRouter.get("/:id",checkExist(station),getDetailtStation)
stationRouter.put("/:id",checkExist(station), updateStation)
stationRouter.delete("/:id",checkExist(station), deleteStation)
module.exports = {stationRouter}