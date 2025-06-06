const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const tasksRouter = require('../routes/tasks');
const Task = require('../models/Task');

let mongod;
let app;

beforeAll(async () => {
  mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  app = express();
  app.use(express.json());
  app.use('/api/tasks', tasksRouter);
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongod.stop();
});

afterEach(async () => {
  await Task.deleteMany();
});

describe('Task API', () => {
  it('should create a new task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ task: 'Test Task' });
    expect(res.statusCode).toBe(201);
    expect(res.body.task).toBe('Test Task');
    expect(res.body.completed).toBe(false);
  });

  it('should get all tasks', async () => {
    await Task.create({ task: 'Task 1' });
    await Task.create({ task: 'Task 2' });

    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(2);
    expect(res.body[0]).toHaveProperty('task');
  });

  it('should toggle a task', async () => {
    const task = await Task.create({ task: 'Toggle Me' });
    const res = await request(app)
      .patch(`/api/tasks/${task._id}/toggle`);
    expect(res.statusCode).toBe(200);
    expect(res.body.completed).toBe(true);
  });

  it('should delete a task', async () => {
    const task = await Task.create({ task: 'Delete Me' });
    const res = await request(app)
      .delete(`/api/tasks/${task._id}`);
    expect(res.statusCode).toBe(204);
  });
});