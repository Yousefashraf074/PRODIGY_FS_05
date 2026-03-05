// User controller for ConnectSphere
import { Request, Response } from 'express';
import { prisma } from '../prisma/client';

export async function getUser(req: Request, res: Response) {
  // ...get user logic
}

export async function updateUser(req: Request, res: Response) {
  // ...update user logic
}

export async function followUser(req: Request, res: Response) {
  // ...follow user logic
}

export async function unfollowUser(req: Request, res: Response) {
  // ...unfollow user logic
}

export async function getFollowers(req: Request, res: Response) {
  // ...get followers logic
}

export async function getFollowing(req: Request, res: Response) {
  // ...get following logic
}
