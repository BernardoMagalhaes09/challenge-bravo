import Prisma from '../../../database/prisma'
import {AppError} from '../../../errors/AppError'
import {IUsers} from '../../../interfaces/dtos/IUsers'
import bcrypt from "bcryptjs"

class RegisterUsersUseCase {

    async execute({email, password}: IUsers) {

        const userAlreadyExists = await Prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new AppError("User already exists")
        }

        if(password.length <= 8) {
            throw new AppError("Passord must have a minimum of 8 characters")
        }

        const hash = await bcrypt.hash(password, 8)

        const registerUser = await Prisma.user.create({
            data: {
                email,
                password: hash
            },
            select: {
                id: true,
                email: true
            }
        })

        return registerUser

    }
}

export { RegisterUsersUseCase }