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

const getBlogByIdFromDB = async (id: string) => {
  const result = await Blog.findById(id);
  return result;
};

const updateBlogByIdFromDB = async (
  id: string,
  payload: IBlog,
  userId: string,
) => {
  if (!payload.author) {
    throw new AppError(400, 'Author is required');
  }

  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(404, 'Blog not found');
  }

  if (blog.author.toString() !== userId) {
    throw new AppError(403, 'You are not authorized to update this blog');
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
  }).populate('author');
  return result;
};

const deleteBlogByIdFromDB = async (id: string, userId: string) => {
  const blog = await Blog.findById(id);

  if (!blog) {
    throw new AppError(404, 'Blog not found');
  }

  if (blog.author.toString() !== userId) {
    throw new AppError(403, 'You are not authorized to delete this blog');
  }

  await Blog.findByIdAndDelete(id);

  return { message: 'Blog deleted successfully' };
};

const getAllBlogsFromDB = async (queryParams: Record<string, unknown>) => {
  const { search, sortBy, sortOrder, filter } = queryParams;

  const query = {} as Record<string, unknown>;

  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      {
        content: { $regex: search, $options: 'i' },
      },
    ];
  }

  if (filter) {
    query.author = filter;
  }

  const order = {} as { [key: string]: 1 | -1 };

  if (sortBy) {
    order[sortBy as string] = sortOrder === 'desc' ? -1 : 1;
  }

  const result = await Blog.find(query)
    .sort(order)
    .populate('author', 'name email');

  return result;
};

export const blogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getBlogByIdFromDB,
  updateBlogByIdFromDB,
  deleteBlogByIdFromDB,
};
