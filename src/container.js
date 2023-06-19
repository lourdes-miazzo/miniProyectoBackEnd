import dotenv from 'dotenv'
dotenv.config()

import {createContainer, Lifetime, asClass} from 'awilix'
import UserMongooseRepository from './data/repositories/UserMongooseRepository.js'
import OrderMongooseRepository from './data/repositories/OrderMongooseRepository.js'
import BusinessMongooseRepository from './data/repositories/BusinessMongooseRepository.js'
import SessionMongooseRepository from './data/repositories/SessionMongooseRepository.js'


const container= createContainer()

container.register('UserRepository', asClass(UserMongooseRepository), {lifetime: Lifetime.SINGLETON})
container.register('OrderRepository', asClass(OrderMongooseRepository), {lifetime: Lifetime.SINGLETON})
container.register('BusinessRepository', asClass(BusinessMongooseRepository), {lifetime: Lifetime.SINGLETON})
container.register('SessionRepository', asClass(SessionMongooseRepository), {lifetime: Lifetime.SINGLETON})

export default container