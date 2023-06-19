import userModel from "../models/userModel.js"
import { createHash } from "../../shared/index.js"
import User from "../../domain/entities/user.js"


class UserMongooserepository{
    async list(limit, page){
        const userDocuments = await userModel.paginate({}, { limit, page });
        const { docs, ...pagination}= userDocuments
        const users= docs.map(d=> new User({
            id: d._id,
            name: d.name,
            lastName: d.lastName,
            email: d.email,            
            role: d.role,
            orders: d.orders 
        }));
    
        return {
            users, 
            pagination
        }
    }
    async getOne(id){
        const userDocument = await userModel.findOne({ _id: id });

        if(!userDocument)
        {
            throw new Error('User dont exist.');
        }
        return new User({
                id: userDocument?._id,
                name: userDocument?.name,
                lastName: userDocument?.lastName,
                email: userDocument?.email,
                role: userDocument?.role,
                orders: userDocument.orders 
            })
    }
    async create(body){
        const hashedPassword = await createHash(body)
        const userHashed = {...body, password : hashedPassword}
        const document = await userModel.create(userHashed)
        return new User({
            id: document._id,
            name: document.name,
            lastName: document.lastName,
            email: document.email,
            role: document?.role,
            orders: document.orders 
        })
    }
    async updateOne(id, body){
        const userDocument = await userModel.findOneAndUpdate({ _id: id }, body, { new: true});
        if(!userDocument){
            throw new Error('User dont exist.');
        }

        return new User ({
            id: userDocument._id,
            name: userDocument.name,
            lastName: userDocument.lastName,
            email: userDocument.email,
            role: userDocument?.role,
            orders: userDocument.orders
        })
    }
    async deleteOne(id){
            return userModel.deleteOne({_id: id})
    }
}

export default UserMongooserepository