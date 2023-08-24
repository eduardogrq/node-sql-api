
import { Router } from 'express';
import pong from '../controllers/index.controller.js';

const router = Router();

router.get('/', pong)

export default router;