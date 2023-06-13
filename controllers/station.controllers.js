const {station} = require("../models")

const createStation = async (req, res) => {
    const {name, address, province} = req.body;
    try {
        const newStation = await station.create({name, address, province});
        res.status(201).send(newStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {createStation}