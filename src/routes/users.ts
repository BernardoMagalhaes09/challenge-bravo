import { Router } from "express"

import { RegisterUserController } from '../useCases/users/registerUsers/RegisterUserController'
import { DeleteUserController }  from '../useCases/users/deleteUsers/DeleteUserController'

const registerUserController = new RegisterUserController()
const deleteUserController = new DeleteUserController()

const router = Router()

router.post('/register', registerUserController.handle)

router.delete('/delete/:id', deleteUserController.handle)

export default router