import z from 'zod'
 const createBusinessValidation =z.object({
    name: z.string(),
    products: z.array(
        z.object({
        id: z.string(),
        product: z.string(),
        price: z.number()
    })
    ).optional()
})

export default createBusinessValidation