const express = require('express')
const { restart } = require('nodemon')
const store = require("../models/Store")
const storeRouter = express.Router()
const {NotFoundError, BadRequestError} = require("../utils/errors")



storeRouter.get("/", (req, res, next) => {
    try {
    const products = store.getProducts()
    res.status(200).json({products:products})
    }
    catch (error) {
        next(error)
    }
})


storeRouter.get("/:productId", (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = store.getProdById(productId)
        if(!product) {
            throw new NotFoundError()
        }
        res.status(200).json({product:product})
    }
    catch(err) {
        next(err)
    }
   
})

storeRouter.post("/", (req, res, next) => {
    res.status(200).send(req.body.name)
})











module.exports = storeRouter