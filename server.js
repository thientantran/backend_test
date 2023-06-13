const express = require("express")
const path = require("path")
const {sequelize} = require("./models")
const app =express()

app.use(express.json())

const publicPathDirectory  = path.join(__dirname, "./public")
app.use(express.static(publicPathDirectory))

app.listen(3000, async() => {
    try {
        await sequelize.authenticate()
        console.log("Connected")
    } catch (error) {
        console.error("Conenct Fail")
    }
})