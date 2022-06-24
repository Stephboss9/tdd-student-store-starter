const Errors = require("../utils/errors")
const {storage} = require("../data/storage")
const BadRequestError = Errors.BadRequestError
class Store {


    //returns a list of the available products
    static getProducts() {
        //return the products
        const products = storage.get("products")
        return products

    }


    //gets a product by its id
    static getProdById (id) {
        console.log(id)
        const product = storage.get("products").find({id:Number(id)})
        console.log(product.id)
        return product
    }

    //creates a purchase order for the user
    static createPurchaseOrder (user, cart) {
        //declare variables
        let totalCost = 0
        //check if order is valid
        if(!user || !cart) {
            throw new BadRequestError("looks there some info missing there")
        }
        if(!user.email || !user.name) {
            throw new BadRequestError("looks there some info missing there")
        }
        //stores receipt
        let receipt = `Showing receipt for ${user.name} available at\n${user.email}:\n`

        //go through the shopping cart and perform calculations
        for(let i = 0; i < cart.length; i++){
            let currentId = cart[i].itemId
            let currentQuantity = cart[i].quantity

            if(!currentId || !currentQuantity) {
                throw new BadRequestError("looks like there some info missing there. Bruh, do you know how to shop?")
            }
            else {
                console.log(currentId)
                let itemName = (storage.get("products").find({id:Number(currentId)}).value().name)
                let price = (storage.get("products").find({id:Number(currentId)}).value().price)
                console.log(price)
                //add up the costs of all items
               totalCost += (price*currentQuantity)
               console.log(totalCost)
                receipt+= `${i+1} total ${itemName} purchased at a cost of $${(price)} for a total /n cost of $${(price*currentQuantity)},`
            }
        }
       receipt+= `Before Taxes, the subtotal was ${totalCost}/nAfter taxes and fees were applied, the total comes out to ${(totalCost*.0875)}. Thanks for shopping!`
        //store order info
        const createdAt = new Date().toISOString()
    
        const newPurchaseOrder = {
          id:cart.length+1,
            name:user.name,
            email:user.email,
            order:cart,
            total:Number.parseFloat(totalCost).toFixed(2),
            createdAt:createdAt,
            receipt:receipt
        }
        //return the purchase order
        let purchase = newPurchaseOrder
        return purchase

    }

}

module.exports = Store
