// Auth routes for ConnectSphere
import { Router } from 'express';
import { register, login, logout, refreshToken } from '../controllers/authController';
import { validateRegister, validateLogin } from '../middlewares/validation';

const router = Router();

router.post('/register', validateRegister, register);
router.post('/login', validateLogin, login);
router.post('/logout', logout);
router.post('/refresh', refreshToken);

export default router;
