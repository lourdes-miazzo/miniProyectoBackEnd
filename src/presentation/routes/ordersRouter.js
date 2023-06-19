import { Router } from "express";
import { createOrders, getOrders, getOrdersById, resolveOrders } from "../controllers/ordersController.js";
import auth from "../middlewares/auth.js";
import authorization from "../middlewares/authorization.js";
const ordersRouter = Router()

ordersRouter.get('/', auth, authorization("getOrders"), getOrders)
ordersRouter.get('/:id', auth, authorization("getOneOrder"), getOrdersById)
ordersRouter.post('/', auth, authorization("postOrder"), createOrders)
ordersRouter.put('/:id', auth, authorization("putOrder"), resolveOrders)

export default ordersRouter