import Prisma from '../../../database/prisma'
import {AppError} from '../../../errors/AppError'

class DeleteUserUseCase {

    async execute(id: string) {

        if(!id) {
            throw new AppError("id is required")
        }

        try{
            const deleteUser = await Prisma.user.delete({
                where: {
                    id: id
                },
                select: {
                    id: true,
                    email: true
                }
            })
            return deleteUser
        }catch(error) {
            throw new AppError("User do not existis")
        }
    }
}

export { DeleteUserUseCase }