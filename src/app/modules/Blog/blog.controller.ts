import { Request, Response } from 'express';
import { blogServices } from './blog.service';
import catchAsync from '../../utils/catchAsync';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.createBlogIntoDB(req.body);
  res.status(201).json({
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: {
      _id: result._id,
      title: result.title,
      content: result.content,
      author: result.author,
    },
  });
});

const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const result = await blogServices.getAllBlogsFromDB();
  res.status(200).json({
    success: true,
    message: 'All blogs fetched successfully',
    data: result,
  });
});

const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await blogServices.getBlogByIdFromDB(id);
  res.status(200).json({
    success: true,
    message: 'Blog fetched successfully',
    statusCode: 200,
    data: result,
  });
});

export const blogController = {
  createBlog,
  getAllBlogs,
  getBlogById,
};
