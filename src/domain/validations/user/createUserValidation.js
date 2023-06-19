import z from "zod"

const createUserValidation= z.object({
    name: z.string().max(20),
    lastName: z.string().max(20),
    email: z.string().email(),
    role: z.array(z.string()), 
    orders: z.array().optional(),
    password: z.string()
})

export default createUserValidation