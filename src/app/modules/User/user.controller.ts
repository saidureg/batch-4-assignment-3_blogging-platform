import { Request, Response } from 'express';
import { userServices } from './user.service';

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDB();
    res.status(200).json({
      message: 'All users fetched successfully',
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

export const userController = {
  getAllUsers,
};
