import container from "../../container.js";
import emailValidation from "../validations/session/emailValidation.js";
import passwordValidation from "../validations/session/passwordValidation.js";
import createUserValidation from "../validations/user/createUserValidation.js";

class SessionManager{
    constructor(){
        this.repository = container.resolve('SessionRepository')
    }
        async getOneByEmail(email){
                await emailValidation.parseAsync(email)
                return this.repository.getOneByEmail(email)
        }
        async collate(password, user){
                await passwordValidation.parseAsync(password)
                return this.repository.collate(password, user)
        }
        async create(body){
                await createUserValidation.parseAsync(body)
                return this.repository.create(body)
        }
}
    export default SessionManager