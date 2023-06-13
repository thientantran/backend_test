const express = require('express')
const {createStation, getAllStation, getDetailtStation, updateStation} = require("../controllers/station.controllers")
const stationRouter = express.Router()

stationRouter.post("/", createStation)
stationRouter.get("/", getAllStation)
stationRouter.get("/:id", getDetailtStation)
stationRouter.put("/:id", updateStation)
module.exports = {stationRouter}