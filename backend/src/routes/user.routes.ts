import { Router } from 'express'
import { UserController } from '../resources/user/user.controller'

const router = Router()
const userController = new UserController()

router.post('/signin', userController.signin)
router.post('/signup', userController.signup)

export default router;