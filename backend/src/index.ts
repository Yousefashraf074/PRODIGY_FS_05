// Express.js entry point for ConnectSphere backend
// Uses TypeScript, clean architecture, scalable for 100k+ users
// Key integrations: JWT, Prisma, Redis, Socket.io, Winston, Helmet, CORS, Rate limiting

import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from './utils/logger';
import { healthRouter } from './routes/health';
// ...import other routers

const app = express();

// Security middlewares
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(morgan('dev'));

// API routes
app.use('/api/health', healthRouter);
// ...other routes

// Centralized error handler
app.use(errorHandler);

// Graceful shutdown
process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully.');
  server.close(() => {
    logger.info('Closed out remaining connections.');
    process.exit(0);
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});
