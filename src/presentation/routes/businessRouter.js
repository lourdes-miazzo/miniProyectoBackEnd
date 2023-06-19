import { Router } from "express";
import { addProduct, createBusiness, getBusiness, getBusinessById } from "../controllers/businessController.js";
import auth from "../middlewares/auth.js"
import authorization from "../middlewares/authorization.js"
const businessRouter = Router()

businessRouter.get('/', getBusiness)
businessRouter.get('/:id', getBusinessById)
businessRouter.post('/', auth, authorization("postBusiness"), createBusiness)
businessRouter.post('/:id/product',auth, authorization("postProductInBusiness"), addProduct)

export default businessRouter