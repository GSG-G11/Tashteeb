import { Router } from 'express';

import { signUp, logout } from '../controller/userAuth/index';

const router = Router();

router.post('/signup', signUp);
router.post('/logout', logout);

export default router;
