import z from 'zod'

const createOderValidation= z.object({
    business: z.string().length(24),
    user: z.string().length(24),
    products: z.array(
        z.object({
            id: z.string(),
            quantity: z.number().positive(),
        })
    ),
    totalPrice: z.number()
})

export default createOderValidation