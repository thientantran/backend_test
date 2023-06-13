const express = require("express")
const path = require("path")
const app =express()

app.use(express.json())

const publicPathDirectory  = path.join(__dirname, "./public")
app.use(express.static(publicPathDirectory))

app.listen(3000, () => {
    console.log("Listening on port 3000")
})