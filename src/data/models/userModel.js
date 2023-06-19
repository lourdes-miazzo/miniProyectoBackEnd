import mongoose, { Schema } from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const usersCollection= "user"
const userSchema = new mongoose.Schema({
    name: {type: Schema.Types.String, required: true},
    lastName: {type: Schema.Types.String, required: true},
    email: {type: Schema.Types.String, required: true},
    role: {type: Schema.Types.String},
    orders: [{type: Schema.Types.ObjectId, ref: 'orders'}],
    password: {type: Schema.Types.String, required: true}
})


userSchema.plugin(mongoosePaginate)

userSchema.pre('find', function(){
    this.populate(['orders'])
})

userSchema.pre('findOne', function(){
    this.populate(['orders'])
})
const userModel = mongoose.model(usersCollection, userSchema)
export default userModel