const Errors = require("../utils/errors")
const {storage} = require("../data/storage")
const BadRequestError = Errors.BadRequestError
class Store {


    static getProducts() {
        //return the products
        const products = storage.get("products")
        return products

    }



    static getProdById (id) {
        console.log(id)
        const product = storage.get("products").find({id:Number(id)})
        return product
    }

    static createPurchaseOrder (order) {

        if(!order.user || !order.shoppingCart) {
            throw new BadRequestError()
        }
        else [
            
        ]

    }

}

module.exports = Store
