import express from 'express';
import { PrismaClient } from '@prisma/client';
import { Queue, Worker } from 'bullmq';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Use the user routes
//app.use('/users', userRoutes);

// Example background job queue
//const queue = new Queue('example-queue');

// app.post('/enqueue', async (req, res) => {
//     await queue.add('example-job', { message: 'Hello, world!' });
//     res.status(200).send('Job enqueued');
// });

// Worker to process background jobs
//const worker = new Worker('example-queue', exampleJob);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});