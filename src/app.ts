import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { userRoutes } from './app/modules/User/user.route';
import { authRoutes } from './app/modules/Auth/auth.route';
import { blogRoutes } from './app/modules/Blog/blog.route';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173'],
  }),
);

// app.use('/api', router);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Blogging Platform');
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
