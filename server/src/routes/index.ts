import { Router } from 'express';
// import signUp from '../controller/userAuth';
import getAllEngineer from '../controller';

const router = Router();

// router.post('/signup', signUp);
router.get('/engPage', getAllEngineer);
export default router;
