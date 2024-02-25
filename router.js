import express from 'express';
import champion from './routes/championRoutes.js';

const router = express.Router();

router.use('/champions', champion);

export default router;

