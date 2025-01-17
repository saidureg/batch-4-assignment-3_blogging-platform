import AppError from '../../errors/AppError';
import { IBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (payload: IBlog) => {
  const { title, content } = payload;

  if (!title || !content) {
    throw new AppError(400, 'Title and content are required');
  }

  if (!payload.author) {
    throw new AppError(400, 'Author is required');
  }

  const result = await Blog.create(payload);
  return result.populate('author');
};

const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};

const getBlogByIdFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlogByIdFromDB = async (id: string, payload: IBlog) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBlogByIdFromDB = async (id: string) => {
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const blogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogByIdFromDB,
  updateBlogByIdFromDB,
  deleteBlogByIdFromDB,
};
