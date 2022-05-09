import { Router } from 'express';
import signUp from '../controller/userAuth';

const router = Router();

router.post('/signup', signUp);

export default router;
