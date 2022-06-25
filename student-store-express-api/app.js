// YOUR CODE HERE

const express = require('express')
const morgan = require('morgan')
const {NotFoundError} = require("./utils/errors")
const storeRouter = require("./routes/store")
const cors = require("cors")



const app = express()


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requeseted-With, Content-Type, Accept");
    next()
})

app.use(morgan('tiny'))
app.use(express.json())
app.use("/store", storeRouter)
app.use(cors())


//general route
app.get("/", (req, res, next) =>{
    res.status(200).json({ping:"pong"})
})

//not found error route
app.use((req, res, next) => {
    return next(new NotFoundError("That page was not found. Ask your grandson for tech support"))
})

//bad request error route
app.use ((error, req, res, next) => {
    let status = error.status || 500
    let message = error.message ||"Something wen't wrong in the application"
    console.log("hey", message)
    return res.status(status).json({error:{status:status,message:message}})
}) 






module.exports = app
