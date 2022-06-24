const express = require('express')
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

storeRouter.get("/purchases", (req, res, next) => {
    try {
        const purchases = store.getPastOrders()
        res.status(200).json({purchases:purchases})
    } catch(err){
        next(err)
    }
})


storeRouter.get("/:productId", (req, res, next) => {
    try {
        const productId = req.params.productId
        const product = store.getProdById(productId)
        if(!product) {
            throw new NotFoundError("The product with that Id was not found")
        }
        res.status(200).send({product:product})
    }
    catch(err) {
        next(err)
    }
   
})

storeRouter.post("/", (req, res, next) => {
    try {
        const cart = req.body.shoppingCart
        const user = req.body.user
        const purchase = store.createPurchaseOrder(user, cart)
        res.status(201).json({purchase:purchase})
    }
    catch (error) {
        next(error)
    }
})











module.exports = storeRouter