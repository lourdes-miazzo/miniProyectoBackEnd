import userModel from "../models/userModel.js";
import { passwordsCompare, createHash } from "../../shared/index.js";

class SessionMongooserepository{
    async getOneByEmail(email){
            const document = await userModel.findOne({email})
            if(!document){
                throw new Error("User dont exist")
            }
            return {
                id: document?._id,
                name: document?.name,
                lastName: document?.lastName,
                email: document?.email,
                password: document?.password, 
                role: document?.role 
            }
    }
    async collate(password, user){
            return passwordsCompare(password, user)
    }
    async create(body){
            const hashedPassword = await createHash(body)
            const userHashed = {...body, password : hashedPassword}
            const document = await userModel.create(userHashed)

            return {
                id: document._id,
                name: document.name,
                lastName: document.lastName,
                email: document.email, 
                role: document.role
            }
    }
}

export default SessionMongooserepository