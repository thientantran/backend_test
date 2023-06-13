const express = require('express')
const {createStation} = require("../controllers/station.controllers")
const stationRouter = express.Router()

stationRouter.post("/", createStation)

module.exports = {stationRouter}