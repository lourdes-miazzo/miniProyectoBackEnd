import z from 'zod'
import idValidation from '../idValidation.js'
import createOderValidation from './createOrderValidation.js'

const updateOrderValidation= z.union([
    idValidation,
    createOderValidation
])

export default updateOrderValidation