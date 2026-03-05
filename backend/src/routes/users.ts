// User routes for ConnectSphere
import { Router } from 'express';
import { getUser, updateUser, followUser, unfollowUser, getFollowers, getFollowing } from '../controllers/userController';
import { authenticate } from '../middlewares/authenticate';

const router = Router();

router.get('/:id', authenticate, getUser);
router.put('/:id', authenticate, updateUser);
router.post('/:id/follow', authenticate, followUser);
router.post('/:id/unfollow', authenticate, unfollowUser);
router.get('/:id/followers', authenticate, getFollowers);
router.get('/:id/following', authenticate, getFollowing);

export default router;
