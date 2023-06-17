const express = require("express")

const {register, login, uploadAvatar,getAllTrip} = require("../controllers/user.controllers")
const { uploadImage } = require("../middlewares/upload/upload_images")
const { authenticate } = require("../middlewares/auth/authenticate")
const userRouter = express.Router()

userRouter.post("/register", register)
userRouter.post("/login", login)
userRouter.get("/get-all-trip", getAllTrip);   
userRouter.post("/upload-avatar",authenticate, uploadImage("avatar"), uploadAvatar)

module.exports = {
    userRouter
}