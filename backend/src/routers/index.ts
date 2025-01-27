import { Router } from 'express';
import authRouter from './auth';
import moviesRouter from './movies';

const router = Router();

router.use('/auth', authRouter);
router.use('/movies', moviesRouter);

export default router;
