const express = require("express")
const path = require("path")
const {sequelize} = require("./models")
const {rootRouter} = require("./routers")
const app =express()

app.use(express.json())

const publicPathDirectory  = path.join(__dirname, "./public")
app.use("/public",express.static(publicPathDirectory))
app.use("/api/v1", rootRouter)

app.listen(3000, async() => {
    try {
        await sequelize.authenticate()
        console.log("Connected")
    } catch (error) {
        console.error("Conenct Fail")
    }
})