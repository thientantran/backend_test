const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const token = req.header("token")
    try {
        const decode = jwt.verify(token, "thien-tan");
        if(decode){
            req.user = decode;
            return next()
        }else{
            res.status(401).send("You need login")
        }
    } catch (error) {
        res.status(401).send(error)
    }
}

module.exports ={ authenticate}