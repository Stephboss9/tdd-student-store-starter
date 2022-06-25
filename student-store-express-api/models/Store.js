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
        let totalItems = 0
        //check if order is valid
        if(!user || !cart || cart.length === 0) {
            throw new BadRequestError("Please add some items to cart before checking out.")
        }
        if(!user.email || !user.name) {
            throw new BadRequestError("Please make sure to provide your name and email.")
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
                receipt.push(`${i+1}. ${currentQuantity} total ${itemName} purchased at a cost of $${(Number.parseFloat(price).toFixed(2))} for a total cost of $${Number.parseFloat((price)*(currentQuantity)).toFixed(2)}.`)
                totalItems += currentQuantity
            }
        }
       receipt.push(`Before Taxes, the subtotal was $${Number.parseFloat(totalCost).toFixed(2)} After taxes and fees were applied, the total comes out to $${Number.parseFloat((totalCost)*(1.0875)).toFixed(2)}. Thanks for shopping!`)
        //store order info
        const createdAt = new Date().toISOString()
    
        const newPurchaseOrder = {
          id:cart.length+1,
            name:user.name,
            email:user.email,
            order:cart,
            total:Number.parseFloat((totalCost)*(1.0875)).toFixed(2),
            totalItems:totalItems,
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

    static checkUser(user) {

        let currentUserName = storage.get("user").value().name
        let currentUserEmail = storage.get("email").value().email
        if (currentUserName != user.name || currentUserEmail != user.email){
            storage.remove("user")
        }
        const newUser = {"user":"", "name":""}
        storage.set(user, newUser)
    }

}

module.exports = Store
