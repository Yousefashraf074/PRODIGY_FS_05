// Socket.io setup for real-time notifications
import { Server } from 'socket.io';
import http from 'http';

export function setupSocket(server: http.Server) {
  const io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      methods: ['GET', 'POST'],
      credentials: true,
    },
  });

  io.on('connection', (socket) => {
    // ...notification logic
  });
}
