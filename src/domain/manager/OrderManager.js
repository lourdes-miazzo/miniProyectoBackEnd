import container from '../../container.js'
import idValidation from "../validations/idValidation.js"
import createOrderValidation from '../validations/order/createOrderValidation.js'
import updateOrderValidation from '../validations/order/updateOrderValidation.js'


class OrderManager{
    constructor(){
        this.repository= container.resolve('OrderRepository')
    }

    async totalOrders(limit, page){
        return this.repository.allOrders(limit, page)
    }
    async orderById(id){
        await idValidation.parseAsync(id)
        return this.repository.orderById(id)
    }
    async createNewOrder(dto){
        await createOrderValidation.parseAsync(dto)
        return this.repository.createNewOrder(dto)
    }
    async updateOrder(id, dto){
        await updateOrderValidation.parseAsync(id, {dto})
        return this.repository.updateOrder(id, dto)
    }
    async findProd(prod){
        return this.repository.findProd(prod)
    }
}

export default OrderManager