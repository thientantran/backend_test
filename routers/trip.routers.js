const express = require("express")
const {createTrip, getAllTrip}= require("../controllers/trip.controllers")
const tripRouter = express.Router()

tripRouter.post("/create", createTrip)
tripRouter.get("/", getAllTrip)


module.exports = {
    tripRouter
}