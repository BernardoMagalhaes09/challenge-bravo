import {Request, Response} from 'express'
import { GetUsersUseCase } from './GetUsersUseCase'

class GetUsersController {

    async handle(request: Request, response: Response) {

        const email = request.query.email as any

        const getUsersUseCase = new GetUsersUseCase()

        try{
            const users = await getUsersUseCase.execute(email)

            return response.status(200).json(users)
        }catch(error) {
            return response.status(400).json(error)
        }
        
    }
}

export { GetUsersController }