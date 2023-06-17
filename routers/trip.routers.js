const express = require("express")
const {checkExist} = require("../middlewares/validations/checkExist")
const {trip} =require("../models")
const {createTrip, getAllTrip, deleteTrip}= require("../controllers/trip.controllers")
const tripRouter = express.Router()

tripRouter.post("/create", createTrip)
tripRouter.get("/", getAllTrip)
tripRouter.delete("/delete/:id", checkExist(trip), deleteTrip )


module.exports = {
    tripRouter
}