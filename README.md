# Backend for "Fullstack Take Home Task"

## Overview
This task is designed to evaluate my skills in building a Full-Stack Todo List App using Next.js, Express.js, Prisma, and MySQL.

## Features
- **Express.js** for server-side application logic.
- **Prisma** for database schema migrations and ORM functionality.
- **Environment management** with `dotenv`.
- **Hot-reloading** during development with `nodemon`.
- **Cross-Origin Resource Sharing** using `cors`.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started
### 1. Clone the Repository
```bash
git clone <repository_url>
cd <repository_folder>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and configure it based on your environment:
```
DATABASE_URL=your_database_connection_string
PORT=your_preferred_port
```

### 4. Run the Application
#### For Development:
```bash
npm run dev
```
#### For Production:
```bash
npm start
```

## Database Management
This project uses Prisma for database interactions.

### 1. Migrate the Database
Run the following command to apply migrations:
```bash
npm run db:migrate
```

### 2. Reset the Database
To reset and reapply migrations, use:
```bash
npm run db:reset
```

## Project Structure
```
project-root
├── src
│   ├── app.js         # Main application entry point
│   └── ...            # Additional source files
├── prisma
│   ├── schema.prisma  # Prisma schema file
├── .env               # Environment variables
├── package.json       # Project configuration
├── README.md          # Project documentation
└── ...
```

## Scripts
- `npm start`: Runs the application in production mode.
- `npm run dev`: Starts the application with hot-reloading.
- `npm run db:migrate`: Applies database migrations.
- `npm run db:reset`: Resets and reapplies database migrations.

## Dependencies
- **[express](https://expressjs.com/):** Web application framework.
- **[cors](https://www.npmjs.com/package/cors):** Middleware for enabling CORS.
- **[prisma](https://www.prisma.io/):** ORM and database toolkit.

## Dev Dependencies
- **[@prisma/client](https://www.npmjs.com/package/@prisma/client):** Prisma client library.
- **[dotenv](https://www.npmjs.com/package/dotenv):** For loading environment variables.
- **[nodemon](https://nodemon.io/):** For hot-reloading during development.

## License
This project is licensed under the ISC License.

## Author
Brett Smith
