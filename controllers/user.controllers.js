const {user} = require("../models")
const bcryptjs = require("bcryptjs")

const register = async(req, res) => {
    console.log("TAN")
    const {name, email, password, phone} = req.body;
    try{
        const salt = bcryptjs.genSaltSync(10);
        const hashPassword = bcryptjs.hashSync(password, salt)
        const newUser = await user.create({name, email, password: hashPassword, phone})
        res.status(201).send(newUser)
    }catch(error){
        res.status(500).send(error)
    }
 }

 module.exports = {register}
