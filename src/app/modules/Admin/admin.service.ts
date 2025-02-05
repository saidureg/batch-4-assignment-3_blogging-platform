import AppError from '../../errors/AppError';
import { Blog } from '../Blog/blog.model';
import { User } from '../User/user.model';

const blockUser = async (userId: string) => {
  const user = await User.findOne({ _id: userId, isBlocked: false }).lean();

  if (!user) {
    throw new AppError(404, 'User not found or already blocked');
  }

  const result = await User.updateOne(
    { _id: userId },
    { $set: { isBlocked: true } },
  );

  if (result.modifiedCount === 0) {
    throw new AppError(500, 'Failed to block user');
  }

  return { message: 'User blocked successfully' };
};

const deleteBlogByIdFromDB = async (id: string) => {
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(404, 'Blog not found');
  }

  await Blog.findByIdAndDelete(id);

  return { message: 'Blog deleted successfully' };
};

export const adminServices = {
  blockUser,
  deleteBlogByIdFromDB,
};
