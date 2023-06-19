import mongoose, { Schema} from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"


const orderCollection= 'orders'
const orderSchema= new Schema({
    business: {type: Schema.Types.ObjectId, ref: 'business', index: true},
    user: {type: Schema.Types.ObjectId, ref: 'user', index: true},
    products: [],
    totalPrice: {type: Schema.Types.Number}
})

orderSchema.plugin(mongoosePaginate)

    orderSchema.pre('find', function(next) {
        this.populate('business');
        next()
    })

    orderSchema.pre('findOne', function(next) {
        this.populate('business');
        next()
    })

    orderSchema.pre('find', function(next) {
        this.populate('user');
        next()
    })
    orderSchema.pre('findOne', function(next) {
        this.populate('user');
        next()
    })

const orderModel= mongoose.model(orderCollection, orderSchema)
export default orderModel