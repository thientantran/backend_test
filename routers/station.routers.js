const express = require('express')
const {createStation, getAllStation, getDetailtStation} = require("../controllers/station.controllers")
const stationRouter = express.Router()

stationRouter.post("/", createStation)
stationRouter.get("/", getAllStation)
stationRouter.get("/:id", getDetailtStation)

module.exports = {stationRouter}