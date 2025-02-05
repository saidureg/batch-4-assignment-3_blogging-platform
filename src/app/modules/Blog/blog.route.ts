import express from 'express';
import { blogController } from './blog.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../User/user.constant';
import validateRequest from '../../middleware/validateRequest';
import { blogValidations } from './blog.validation';

const router = express.Router();

router.get('/', blogController.getAllBlogs);

router.post(
  '/',
  auth(USER_ROLE.user),
  validateRequest(blogValidations.blogValidationSchema),
  blogController.createBlog,
);
router.get('/:id', blogController.getBlogById);

router.patch(
  '/:id',
  auth(USER_ROLE.user),
  validateRequest(blogValidations.blogValidationsUpdateSchema),
  blogController.updateBlogById,
);

router.delete('/:id', auth(USER_ROLE.user), blogController.deleteBlogById);

export const blogRoutes = router;
