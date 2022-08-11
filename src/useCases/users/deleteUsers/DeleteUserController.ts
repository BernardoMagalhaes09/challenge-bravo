import { Request, Response } from "express";
import { DeleteUserUseCase } from './DeleteUserUseCase'

class DeleteUserController {

    async handle(request: Request, response: Response) {
        const {id} = request.params

        const deleteUserUseCase = new DeleteUserUseCase()

        try {
            const deleteUser = await deleteUserUseCase.execute(id)

            return response.status(202).json({message: 'Delete user completed', user: deleteUser})
        }catch(error) {
            return response.status(402).json(error)
        }
    }
}

export { DeleteUserController }