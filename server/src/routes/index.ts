import { Router } from 'express';
// import signUp from '../controller/userAuth/signup';
// import logout from '../controller/userAuth/logout';

import { signUp, logout } from '../controller/userAuth/index';

const router = Router();

router.post('/signup', signUp);
router.post('/logout', logout);

export default router;
