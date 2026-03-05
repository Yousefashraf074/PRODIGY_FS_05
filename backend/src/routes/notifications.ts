// Notification routes for ConnectSphere
import { Router } from 'express';
import { getNotifications, markAsRead } from '../controllers/notificationController';
import { authenticate } from '../middlewares/authenticate';

const router = Router();

router.get('/', authenticate, getNotifications);
router.post('/:id/read', authenticate, markAsRead);

export default router;
