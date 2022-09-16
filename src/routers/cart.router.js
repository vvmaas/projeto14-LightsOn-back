import {Router} from "express"
import { getCart, postCartProduct, deleteCartProduct } from "../controllers/cart.controller.js"
import checkToken from "../middlewares/checkToken.middleware.js"
import checkSession from "../middlewares/checkSession.middleware.js"
import checkUser from "../middlewares/checkUser.middleware.js"

const cartRouter = Router()
cartRouter.get('/cart', checkToken, checkSession, checkUser, getCart)
cartRouter.post('/cart', checkToken, checkSession, checkUser, postCartProduct)
cartRouter.delete('/cart/:_id', checkToken, checkSession, checkUser, deleteCartProduct)

export default cartRouter