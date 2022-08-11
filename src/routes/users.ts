import { Router } from "express"

import { RegisterUserController } from '../useCases/users/registerUsers/RegisterUserController'
import { DeleteUserController }  from '../useCases/users/deleteUsers/DeleteUserController'
import { GetUsersController } from "../useCases/users/getUsers/GetUsersControllers"

const registerUserController = new RegisterUserController()
const deleteUserController = new DeleteUserController()
const getUsersController = new GetUsersController()

const router = Router()

router.post('/register', registerUserController.handle)

router.delete('/delete/:id', deleteUserController.handle)

router.get('/all', getUsersController.handle)

export default router