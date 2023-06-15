const authorize = (aArray) => {
    return (req, res, next) => {
        const {user} = req; //user nay khi da run middleware authenticate, thi no se co user cho minh
        // console.log(user)
        console.log(req)
        if(aArray.findIndex((ele) => ele === user.type) > -1){
            next()
        }else{
            res.status(403).send("Not permission")
        }
    }
}
module.exports = {
    authorize
}