// YOUR CODE HERE

const express = require('express')
const morgan = require('morgan')
const {NotFoundError} = require("./utils/errors")
const storeRouter = require("./routes/store")



const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use("/store", storeRouter)


app.get("/", (req, res, next) =>{
    res.status(200).json({ping:"pong"})
})

app.use((req, res, next) => {
    return next(new NotFoundError("That page was not found. Ask your grandson for tech support"))
})


app.use ((error, req, res, next) => {
    let status = error.status || 500
    let message = error.message ||"Something wen't wrong in the application"
    return res.status(status).json({error:{status,message}})
}) 






module.exports = app
