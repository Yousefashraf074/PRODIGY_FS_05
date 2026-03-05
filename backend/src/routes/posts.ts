// Post routes for ConnectSphere
import { Router } from 'express';
import { createPost, getPosts, updatePost, deletePost, likePost, unlikePost, commentOnPost, getComments, tagUser } from '../controllers/postController';
import { authenticate } from '../middlewares/authenticate';

const router = Router();

router.post('/', authenticate, createPost);
router.get('/', getPosts);
router.put('/:id', authenticate, updatePost);
router.delete('/:id', authenticate, deletePost);
router.post('/:id/like', authenticate, likePost);
router.post('/:id/unlike', authenticate, unlikePost);
router.post('/:id/comment', authenticate, commentOnPost);
router.get('/:id/comments', getComments);
router.post('/:id/tag', authenticate, tagUser);

export default router;
