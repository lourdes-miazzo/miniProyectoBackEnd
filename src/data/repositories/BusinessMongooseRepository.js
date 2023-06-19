
import Business from "../../domain/entities/business.js"
import businessModel from "../models/businessModel.js"
import productModel from "../models/productModel.js";

class BusinessMongooseRepository{

    async businesses(limit, page){
        const allBusiness= await businessModel.paginate({}, { limit, page })
        const { docs, ...pagination}= allBusiness
        const businesses= docs.map(d=> new Business({
            id: d._id,
            name: d.name,
            products: d.products,
            }))
        return {
            businesses, 
            pagination
        }
    }
    async businessId(id){
        const busId= await businessModel.findById(id)
        return new Business({
            id: busId?._id,
            name: busId?.name,
            products: busId?.products
        })
    }
    async createNewBusiness(body){
        const businessNew = await businessModel.create(body)
        return new Business({
            id: businessNew._id,
            name: businessNew.name,
            products: businessNew.products
        })
    }
    async newProd(id, body){
        const product = await productModel.create(body)
        const businessFind= await businessModel.findOneAndUpdate(
            {_id: id},
            {$push: {products: product}},
            {new: true}
        )
        return new Business({
            id: businessFind._id,
            name: businessFind.name,
            products: businessFind.products
        })
    }
}

export default BusinessMongooseRepository