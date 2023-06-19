import { Router } from "express";
import { addProduct, createBusiness, getBusiness, getBusinessById } from "../controllers/businessController.js";

const businessRouter = Router()

businessRouter.get('/', getBusiness)
businessRouter.get('/:id', getBusinessById)
businessRouter.post('/', createBusiness)
businessRouter.post('/:id/product', addProduct)

export default businessRouter