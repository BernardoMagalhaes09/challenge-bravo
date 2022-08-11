import Prisma from '../../../database/prisma'
import {AppError} from '../../../errors/AppError'

class GetUsersUseCase {

    async execute(email: string | undefined) {

        try{
            console.log(email)
            const users = await Prisma.user.findMany({
                where: {
                    email: email
                },
                select: {
                    id: true,
                    email: true
                }
            })

            return users
        }catch(error: any) {
            throw new AppError("Failed to find users")
        }
    }
}

export { GetUsersUseCase }