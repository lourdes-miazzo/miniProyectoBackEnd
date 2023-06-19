import mongoose, { Schema } from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const businessCollection= 'business'
const businessSchema= new Schema({
    name: {type: Schema.Types.String},
    products: {type: Schema.Types.Array}
})


businessSchema.plugin(mongoosePaginate)
const businessModel= mongoose.model(businessCollection, businessSchema)
export default businessModel