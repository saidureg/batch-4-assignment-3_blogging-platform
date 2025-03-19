import express from 'express';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middleware/validateRequest';
import { userValidations } from '../User/user.validation';
import { adminController } from './admin.controller';

const router = express.Router();

router.patch(
  '/users/:userId/block',
  auth(USER_ROLE.admin),
  validateRequest(userValidations.updateUserValidationSchema),
  adminController.blockUser,
);

router.delete(
  '/blogs/:id',
  auth(USER_ROLE.admin),
  adminController.deleteBlogById,
);

export const adminRoutes = router;
