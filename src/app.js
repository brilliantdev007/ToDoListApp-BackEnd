import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient()
const app = express()

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// APIs
// Get tasks
app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
})

// Get tasks
app.get('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const task = await prisma.task.findFirst({ where: { id: Number(id) }});
  res.json(task);
})

// Create a new task
app.post('/tasks', async (req, res) => {
  const { title, color } = req.body
  const task = await prisma.task.create({
    data: {
      title,
      color,
      completed: false
    },
  })
  res.json(task)
})

// Delete a task by id
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params
  const task = await prisma.task.delete({
    where: { id: Number(id) },
  })
  res.json(task);
})

// Update a task
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, color } = req.body;

  const task = await prisma.task.update({
    where: { id: Number(id), },
    data: { title: title, color: color }
  })
  res.json(task)
})

// Update a task's status
app.put('/tasks/:id/status', async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  const task = await prisma.task.update({
    where: { id: Number(id), },
    data: { completed: completed }
  })
  res.json(task)
})

// Serve a backend
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

server.addListener("close", () => {
  console.log(`closed http://localhost:${port}`);
})