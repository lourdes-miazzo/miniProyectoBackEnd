import Orders from "../../domain/entities/orders.js"
import orderModel from "../models/orderModel.js"
import productModel from "../models/productModel.js";

class OrderMongooseRepository{
    async allOrders(limit, page){
        const orders= await orderModel.paginate({}, { limit, page })
        const { docs, ...pagination}= orders
        const allOrd= docs.map(d=> new Orders({
            id: d._id,
            orderNumber: d.orderNumber,
            business: d.business,
            user: d.user,
            products: d.products,
            totalPrice: d.totalPrice
            }));
        return {
            allOrd, 
            pagination
        }
    }
    async orderById(id){
        const orderId= await orderModel.findById(id)
        return new Orders({
            id: orderId?._id,
            orderNumber: orderId?.orderNumber,
            business: orderId?.business,
            user: orderId?.user,
            products: orderId?.products,
            totalPrice: orderId?.totalPrice
        })
    }
    async createNewOrder(dto){
        const newOrder= await orderModel.create(dto)
        return new Orders({
            id: newOrder._id,
            orderNumber: newOrder.orderNumber,
            business: newOrder.business,
            user: newOrder.user,
            products: newOrder.products,
            totalPrice: newOrder.totalPrice
        })
    }
    async updateOrder(id, dto){
        const orderUpdated= await orderModel.findOneAndUpdate(
            {_id: id},
            {$set: dto},
            {new: true}
        )
        return new Orders({
            id: orderUpdated._id,
            orderNumber: orderUpdated.orderNumber,
            business: orderUpdated.business,
            user: orderUpdated.user,
            products: orderUpdated.products,
            totalPrice: orderUpdated.totalPrice
        })
    }
    async findProd(prod){
        const products= await productModel.findById(prod.id)
        return products
    }
}
export default OrderMongooseRepository