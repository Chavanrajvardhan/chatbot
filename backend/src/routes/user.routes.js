import { Router } from "express";
import { 
    loginUser, 
    registerUser, 
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

//routes for handle request comming from frontend 
const router = Router()

router.route("/register").post(
    registerUser
    )

router.route("/login").post(loginUser)



export default router