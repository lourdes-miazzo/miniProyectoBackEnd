import container from "../../container.js"
import idValidation from "../validations/idValidation.js"
import createBusinessValidation from "../validations/business/createBusinessValidation.js"
import updateBusinessValidation from "../validations/business/updateBusinessValidation.js"

class BusinessManager{
    constructor(){
        this.repository= container.resolve('BusinessRepository')
    }

    async businesses(limit, page){
        return this.repository.businesses(limit, page)
    }
    async businessId(id){
        await idValidation.parseAsync(id)
        return this.repository.businessId(id)
    }
    async createNewBusiness(body){
        await createBusinessValidation.parseAsync(body)
        return this.repository.createNewBusiness(body)
    }
    async newProd(id, body){
        await updateBusinessValidation.parseAsync(id, {body})
        return this.repository.newProd(id, body)
    }
}
export default BusinessManager