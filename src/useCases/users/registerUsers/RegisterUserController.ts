import { Request, Response } from "express";
import { RegisterUsersUseCase } from './RegisterUsersUseCase'

class RegisterUserController {

    async handle(request: Request, response: Response) {
        const {email, password} = request. body

        const registerUsersUseCase = new RegisterUsersUseCase()

        try {
            const registerUser = await registerUsersUseCase.execute({
                email,
                password
            })

            return response.status(201).json(registerUser)
        }catch(error) {
            return response.status(402).json(error)
        }
    }
}

export { RegisterUserController }