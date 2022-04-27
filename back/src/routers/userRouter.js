import { Router } from "express";
import { UserService } from "../services/userService.js";

const userRouter = Router();

userRouter.post("/users/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const newUser = await UserService.addUser({
      name,
      email,
      password,
    });

    const body = {
      success: true,
      user: newUser,
    };

    res.status(201).json(body);
  } catch (error) {
    next(error);
  }
});

userRouter.post("/users/signin", async (req, res, next) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    const user = await UserService.getUser({ email, password });

    const body = {
      success: true,
      user,
    };

    res.status(200).json(body);
  } catch (error) {
    next(error);
  }
});

export { userRouter };
