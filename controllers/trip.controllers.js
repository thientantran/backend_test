const {trip} = require("../models")
const {station} = require("../models")
const createTrip = async (req, res) => {
    const {fromStation, toStation, startTime, price} = req.body; 
    try {
        const newTrip = await trip.create({fromStation, toStation, startTime, price});
        res.status(200).send(newTrip)
    } catch (error) {
       res.status(500).send(error) 
    }
}

const getAllTrip = async (req, res) =>{
    try {
        const tripList = await trip.findAll({
            include: [
                {
                    model: station,
                    as: "from"
                },
                {
                    model: station,
                    as: "to"
                }
            ]
        });
        res.status(200).send(tripList)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {createTrip,getAllTrip}