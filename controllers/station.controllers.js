const {station} = require("../models")
const {Op} = require("sequelize")
const createStation = async (req, res) => {
    const {name, address, province} = req.body;
    try {
        const newStation = await station.create({name, address, province});
        res.status(201).send(newStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllStation = async (req, res) => {
    const {name} = req.query;
    try {
        if(name){
            const stationList = await station.findAll({
                where: {
                    name: {
                        [Op.like] : `%${name}%`
                    }
                }
            })
            res.status(200).send(stationList)
        }else{
            const stationList = await station.findAll();
            res.status(200).send(stationList)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getDetailtStation = async (req, res) => {
    const {id} = req.params;
    try {
        const detailStation = await station.findOne({
            where:{
                id,
            }
        })
        res.status(200).send(detailStation)
    } catch (error) {
        res.status(500).send(error)
    }
}

const updateStation = async (req, res) => {
    const {id} = req.params
    const {name, address, province} = req.body
    try {
        await station.update(
            {name, address, province},
            {
                where: {
                    id,
                }
            }
        )
        res.status(200).send({name, address, province})
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {createStation, getAllStation, getDetailtStation, updateStation}