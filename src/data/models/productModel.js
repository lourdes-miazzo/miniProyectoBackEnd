import mongoose, { Schema } from "mongoose"

const productCollection= "product"
const productSchema= new Schema({
    product: {type: Schema.Types.String},
    price: {type: Schema.Types.Number}
})

const productModel = mongoose.model(productCollection, productSchema)
export default productModel