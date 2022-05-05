import { Router } from 'express';
import signUp from '../controller/userAuth';
import getEngineer from '../controller';

const router = Router();

router.post('/signup', signUp);
router.get('/engHome', getEngineer);

export default router;
