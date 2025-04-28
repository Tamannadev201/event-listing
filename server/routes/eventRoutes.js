import express from 'express';
import { createEvent } from '../controllers/eventController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createEvent); 

export default router;
