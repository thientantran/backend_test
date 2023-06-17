const express = require("express")
const {createTrip}= require("../controllers/trip.controllers")
const tripRouter = express.Router()

tripRouter.post("/create", createTrip)


module.exports = {
    tripRouter
}