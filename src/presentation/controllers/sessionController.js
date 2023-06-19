import SessionManager from "../../domain/manager/SessionManager.js"
import { generateToken } from "../../shared/index.js"

export const login= async (req,res, next)=>{
    try{

        const email = req.body.email
        const password = req.body.password 

        const manager = new SessionManager()
        const user = await manager.getOneByEmail(email)

        if(!user){
            return res.status(401).send({ message: 'Login failed, user dont exist.'})
        }
        const isHashedPassword = await manager.collate(password, user)
        if (!isHashedPassword)
        {
            return res.status(401).send({ message: 'Login failed, invalid password.'})
        } 
        const accessToken = await generateToken(user)

        res.cookie('accessToken', accessToken, {
            maxAge: 60*60*1000,
            httpOnly: true
        }).send({message: 'Login success!', accessToken})
        }
        catch(e){
            next(e)
        }
}

export const current = async(req, res, next)=>{
    try{
        res.status(200).send({
            message: "success", 
            payload: req.user})
    }
    catch(e){
        next(e)
    }
}
export const signup= async (req,res, next)=>{
    try{

        const manager = new SessionManager()
        const user = await manager.create(req.body)

        res.status(201).send({ 
            status: 'success', 
            message: 'User created.',
            payload: user })
        
    }
    catch(e){
        next(e)
    }
}
export const logout= async (req,res, next)=>{
    try{
        req.session.destroy(err=>{
            if(!err){
                return res.status(200).send({message: "logout ok!"})
            }
            res.status(400).send({ 
                message: 'Logout error!',
                body: err })
        })
    }
    catch(e){
        next(e)
    }
}