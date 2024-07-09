import express, { Application, Request, Response } from 'express';
import passport from 'passport';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { Queue, Worker } from 'bullmq';
import authRoutes from './routes/auth';
import gameDataRoutes from './routes/gameData';
import toolRoutes from './routes/tools';

dotenv.config();

import './config/passportConfig';

const app: Application = express();
const prisma = new PrismaClient();
const port: string | number = process.env.PORT || 3000;

app.use(express.json());
app.use(passport.initialize());

// Set up CORS to allow requests from your frontend
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:5173', 'http://192.168.4.164:5173'], // Replace with the URL of your frontend
    credentials: true,
}));


app.use('/api/auth', authRoutes);
app.use('/api/gameData', gameDataRoutes);
app.use('/api/tools', toolRoutes);

// Example background job queue
// const queue = new Queue('example-queue');
//
// app.post('/enqueue', async (req: Request, res: Response) => {
//     await queue.add('example-job', { message: 'Hello, world!' });
//     res.status(200).send('Job enqueued');
// });

// Worker to process background jobs
// const worker = new Worker('example-queue', exampleJob);

app.listen(port, () => {
    console.log(`MercBot backend listening at http://localhost:${port}`);
});

export default app;