import BusinessManager from "../../domain/manager/businessManager.js"

export const getBusiness = async(req,res,next)=>{
    try{
        let limit = req.query.limit ? +req.query.limit : 10 
        let page = req.query.page ? +req.query.page : 1

        const manager = new BusinessManager()
        const allBusiness= await manager.businesses(limit, page)
        res.status(200).send({
            message: 'Businesses succesfully found',
            businesses: allBusiness.docs, 
            ...allBusiness, 
            docs: undefined 
        })
    }
    catch(e){
        next(e)
    }
}
export const getBusinessById = async(req,res,next)=>{
    try{
        const {id}= req.params
        const manager = new BusinessManager()
        const idBusiness= await manager.businessId(id)
        res.status(200).send({
            message: `Business with Id: ${id} found`,
            payload: idBusiness
        })
    }
    catch(e){
        next(e)
    }
}
export const createBusiness = async(req,res,next)=>{
    try{
        const body= req.body
        const manager = new BusinessManager()
        const newBusiness= await manager.createNewBusiness(body)
        res.status(201).send({
            message: 'New business created',
            payload: newBusiness
        })
    }
    catch(e){
        next(e)
    }
}
export const addProduct = async(req,res,next)=>{
    try{
        const businessId= req.params.id
        const body= req.body

        const manager = new BusinessManager()
        const newProdInBusiness= await manager.newProd(businessId, body)
        res.status(201).send({
            message: 'New product added in business',
            payload:newProdInBusiness
        })
    }
    catch(e){
        next(e)
    }
}