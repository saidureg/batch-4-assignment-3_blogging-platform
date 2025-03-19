# _Blogs Management System_

A professional RESTful API built to manage a blogging platform where users can Create, update, and delete their blogs. Designed for scalability and reliability, this application leverages modern technologies and follows industry best practices.

## _🚀 Live Demo_

Access the live API [Here](https://batch-4-assignment-3-blogging-platform.vercel.app/)

## Features

1.  **Blog Management**

- Allows a logged-in user to create, Update, and Delete a blog.
- Search blogs by title or content.
- Sort blogs by specific fields such as createdAt or title.
- Defines the sorting order. Accepts values asc (ascending) or desc (descending).
- Filter blogs by author ID

2. **Admin Management**

- Can delete any blog.
- Can block any user by updating a property isBlocked.

3. **User Management**

- Can register and log in.
- Can create blogs (only when logged in).
- Can update and delete their own blogs.

## _🔧 Tech Stack_

- _Backend:_ Node.js, Express.js
- _Database:_ MongoDB with Mongoose
- _Validation:_ Zod for schema validation
- _Authentication:_ JWT, bcrypt
- _Environment:_ dotenv for secure configuration

## _🌟 API Endpoints_

## User

1. **Register User**

- _URL:_ /api/auth/register
- _Method:_ POST

2. **Login User**

- _URL:_ /api/auth/login
- _Method:_ POST

## Blog Management

1. **Admin Block a User**

- _URL:_ /api/admin/users/:userId/block
- _Method:_ PATCH

2. **Admin Delete a User**

- _URL:_ /api/admin/blogs/:id
- _Method:_ DELETE

## Blog Management

1. **Create Blog**

- _URL:_ /api/blogs
- _Method:_ POST

2. **Get All Blog(Public)**

- _URL:_ /api/blogs
- _Method:_ GET
- _Query:_ /api/blogs?searchTerm=blogtitle&sortBy=title&sortOrder=desc&filter=authorId

3. **Get a Specific Blog**

- _URL:_ /api/blogs/:id
- _Method:_ GET

4. **Update Blog**

- _URL:_ /api/blogs/:id
- _Method:_ PATCH

5. **Delete Blog**

- _URL:_ /api/blogs/:id
- _Method:_ DELETE

## _Project Setup Guide_

Follow the instructions below to set up the project on your local development environment.

## Prerequisites

Before starting, ensure the following are installed on your system:

- Node.js (v16+)
- `yarn` or `npm` installed globally on your system.
- MongoDB (running locally or a connection string for a cloud database like MongoDB Atlas)
- Visual Studio Code
- TypeScript (installed globally via npm install -g typescript)

## Steps to Set Up the Project

1. **Clone the Repository:**

   - Open your terminal and navigate to the desired folder.
   - Clone the repository using the command:
     ```bash
     git clone <repository-link>
     ```

2. **Open the Project in Visual Studio Code:**

   - Open the cloned project folder in VS Code.

3. **Install Dependencies:**

   - Install project dependencies using npm or Yarn:
     ```bash
     yarn
     ```

4. **Configure Environment Variables:**

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```bash
     PORT=5000
     ```

     ```bash
     DATABASE_URL=mongodb://<Your Database URL>
     ```

     ```bash
     BCRYPT_SALT_ROUNDS=<Number>
     ```

     ```bash
     JWT_ACCESS_SECRET=<HashCode>
     ```

     ```bash
     JWT_ACCESS_EXPIRATION=<Time Frame>
     ```

5. **Start the Development Server:**

   - To start the development server, use one of the following commands:
     ```bash
     yarn run start:dev
     ```
     or
     ```bash
     yarn start:dev
     ```

6. **Linting and Formatting:**

   - To check and fix linting issues using ESLint, run:
     ```bash
     yarn run lint:fix
     ```
   - To format the code using Prettier, run:
     ```bash
     yarn run prettier
     ```

7. **Build the Project:**
   - Compile TypeScript files to JavaScript using:
     ```bash
     yarn run build
     ```
   - This will run the `tsc` command to transpile TypeScript files into JavaScript.
