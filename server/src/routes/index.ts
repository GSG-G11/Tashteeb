import { Router } from 'express';
import { signUp, login, currentUser } from '../controller/userAuth';

const router = Router();

router.post('/signup', signUp);
router.post('/login', login);
router.get('/auth/user', currentUser);

export default router;
