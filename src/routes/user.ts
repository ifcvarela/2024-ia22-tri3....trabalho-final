import { Router } from "express"
import userMiddleware from "../middlewares/user.middleware"
const router = Router()
router.get("/", userMiddleware.listUsers)
router.post("/", userMiddleware.createUser)
router.put("/", userMiddleware.updateUser)
router.delete("/", userMiddleware.deleteUser)
export default router