import { Router } from "express";
import { CreateUsercontroller } from "../modules/users/useCases/createUser/CreateUsercontroller";


const createUsercontroller = new CreateUsercontroller();

const userRoutes = Router ();

userRoutes.post("/", createUsercontroller.handle);

export { userRoutes }