import { Router } from "express";
import { allUsers, oneUser, saveNewUser, updateUser, deleteUser } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
import authorization from "../middlewares/authorization.js";

const userRouter = Router()

userRouter.get("/", auth, authorization("getUsers"), allUsers)
userRouter.get("/:id", auth, authorization("getOneUser"), oneUser)
userRouter.post("/", auth, authorization("postNewUser"), saveNewUser) 
userRouter.put("/:id", auth, authorization("putUser"), updateUser)
userRouter.delete("/:id", auth, authorization("deleteUser"), deleteUser)

export default userRouter