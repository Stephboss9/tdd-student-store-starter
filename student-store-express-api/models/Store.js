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
        let receipt = []
        receipt[0] = `Showing receipt for ${user.name} available at ${user.email}:`
        cart = cart.sort(function(a,b){return a.itemId - b.itemId})
        //go through the shopping cart and perform calculations
        for(let i = 0; i < cart.length; i++){
            let currentId = cart[i].itemId
            let currentQuantity = cart[i].quantity

            if(i != cart.length - 1){
                if(cart[i].itemId === cart[i+1].itemId){
                    throw new BadRequestError("looks like there are duplicate items. Bruh, do you know how to shop?")
                }
            }
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
                receipt.push(`${i+1}. ${currentQuantity} total ${itemName} purchased at a cost of $${(price)} for a total cost of $${Number.parseFloat((price)*(currentQuantity)).toFixed(2)}.`)
            }
        }
       receipt.push(`Before Taxes, the subtotal was ${Number.parseFloat(totalCost).toFixed(2)} After taxes and fees were applied, the total comes out to ${((totalCost)*(0.0875))}. Thanks for shopping!`)
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
        //add this purchase to list of past purchases
        storage.get("purchases").push(purchase).write()
        return purchase

    }

    static getPastOrders() {
        let purchases = storage.get("purchases").orderBy("createdAt", "asc")
        if(!purchases) {throw new BadRequestError("Looks like you have not made an order yet. ")
    }
        return purchases
    }

}

module.exports = Store
