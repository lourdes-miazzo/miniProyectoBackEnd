import { Router } from "express";
import { createOrders, getOrders, getOrdersById, resolveOrders } from "../controllers/ordersController.js";

const ordersRouter = Router()

ordersRouter.get('/', getOrders)
ordersRouter.get('/:id', getOrdersById)
ordersRouter.post('/', createOrders)
ordersRouter.put('/:id', resolveOrders)

export default ordersRouter