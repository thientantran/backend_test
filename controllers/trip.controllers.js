const {trip} = require("../models")
const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, price} = req.body; 
    try {
        const newTrip = await trip.create({fromStation, toStation, startTime, price});
        res.status(200).send(newTrip)
    } catch (error) {
       res.status(500).send(error) 
    }
}

module.exports = {createTrip}