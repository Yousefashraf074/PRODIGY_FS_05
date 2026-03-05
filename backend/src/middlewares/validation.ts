// Zod validation middleware for ConnectSphere
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export function validateRegister(req: Request, res: Response, next: NextFunction) {
  // ...Zod validation logic for register
}

export function validateLogin(req: Request, res: Response, next: NextFunction) {
  // ...Zod validation logic for login
}
