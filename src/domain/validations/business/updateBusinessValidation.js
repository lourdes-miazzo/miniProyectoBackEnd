import z from 'zod'
import idValidation from '../idValidation.js'
import createBusinessValidation from './createBusinessValidation.js'

const updateBusinessValidation = z.union([
    idValidation,
    createBusinessValidation
])

export default updateBusinessValidation