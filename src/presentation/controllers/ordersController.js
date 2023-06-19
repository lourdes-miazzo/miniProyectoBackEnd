import OrderManager from "../../domain/manager/orderManager.js"

export const getOrders = async(req,res,next)=>{
    try{
        let limit = req.query.limit ? +req.query.limit : 10 
        let page = req.query.page ? +req.query.page : 1

        const manager= new OrderManager()
        const allOrders= await manager.totalOrders(limit, page)
        console.log(allOrders.docs)
        res.status(200).send({
            message: "Orders Found",
            orders: allOrders.docs, 
            ...allOrders, 
            docs: undefined  
        })
    }
    catch(e){
        next(e)
    }
}
export const getOrdersById = async(req,res,next)=>{
    try{
        const id= req.params.id
        const manager= new OrderManager()
        const orderId= await manager.orderById(id)
        res.status(200).send({
            message: `Order with id ${id} found`,
            payload: orderId
        })
    }
    catch(e){
        next(e)
    }
}
export const createOrders = async(req,res,next)=>{
    try{
        const order = req.body
        const products = order.products
    
        let totalPrice = 0

        for (let index = 0; index < products.length; index++) {
            const manager= new OrderManager()
            const prod= await manager.findProd(products[index])

            const sumaParcial= prod.price * products[index].quantity
            totalPrice += sumaParcial
        }
        
        const dto={
            ...order, 
            totalPrice: totalPrice
        }

        const manager= new OrderManager()
        const newOrder= await manager.createNewOrder(dto)
        res.status(201).send({
            message: "New order created",
            payload: newOrder
        }) 
    }
    catch(e){
        next(e)
    }
}
export const resolveOrders = async(req,res,next)=>{
    try{
        const id= req.params.id
        const order= req.body
        const products = order.products
    
        let totalPrice = 0

        for (let index = 0; index < products.length; index++) {
            const manager= new OrderManager()
            const prod= await manager.findProd(products[index])
            const sumaParcial= prod.price * products[index].quantity
            totalPrice += sumaParcial
        }
        
        const dto={
            ...order, 
            totalPrice: totalPrice
        }

        const manager= new OrderManager()
        const orderUpdated= await manager.updateOrder(id, dto)
        res.status(200).send({
            message: "Order updated succesfully",
            payload: orderUpdated
        })
    }
    catch(e){
        next(e)
    }
}