// Notification controller for ConnectSphere
import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export async function getNotifications(req: Request, res: Response) {
  // ...get notifications logic
}

export async function markAsRead(req: Request, res: Response) {
  // ...mark notification as read logic
}
