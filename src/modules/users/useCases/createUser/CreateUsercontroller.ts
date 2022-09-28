import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUsercontroller {
    async handle(req: Request, res: Response){
        const { name, email  } = req.body;

        const createUserUseCase = new CreateUserUseCase();

        const result = await createUserUseCase.execute({name, email});

        return res.status(201).json(result)

    }
}