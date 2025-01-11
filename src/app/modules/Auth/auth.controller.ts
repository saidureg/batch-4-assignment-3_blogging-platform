import { Request, Response } from 'express';
import { AuthValidations } from './auth.validation';
import { authServices } from './auth.service';
import { userValidations } from '../User/user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const validatedUser = await userValidations.userValidationSchema.parseAsync(
      req.body,
    );

    const result = await authServices.createUserIntoDB(validatedUser);
    res.status(201).json({
      message: 'User registered successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      success: false,
      error,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const validatedUser =
      await AuthValidations.loginValidationSchema.parseAsync(req.body);

    const result = await authServices.loginUser(validatedUser);
    res.status(200).json({
      success: true,
      message: 'Login successful',
      status: 200,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      success: false,
      error,
    });
  }
};

export const authController = {
  createUser,
  loginUser,
};
