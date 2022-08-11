import { Router } from "express"

import { RegisterUserController } from '../useCases/users/registerUsers/RegisterUserController'

const registerUserController = new RegisterUserController()

const router = Router()

router.post('/register', registerUserController.handle)

export default router