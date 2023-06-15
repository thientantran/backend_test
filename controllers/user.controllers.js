const {user} = require("../models")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const register = async(req, res) => {
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

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const newUser = await user.findOne({
            where: {
                email
            }
        });
        if(newUser){
            const isAuth = bcryptjs.compareSync(password, newUser.password);
            if(isAuth){
                const token = jwt.sign({email: newUser.email, type: newUser.type}, "thien-tan", {expiresIn: 30*60})
                res.status(200).send({message: "Login", token:token})
            }else{
                res.status(500).send({message:"Login Failed"})
            }
        }else{
            res.status(404).send({message: "This account doesn't exist"})
        }
    } catch (error) {
       res.status(500).send(error) 
    }
}

 module.exports = {register,login}
