import express from 'express';
import { 
  createEvent, 
  getEvents, 
  getEventById, 
  updateEvent, 
  deleteEvent, 
  getEventList 
} from '../controllers/eventController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// 👉 Create event (protected)
router.post('/', authMiddleware, createEvent);

// 👉 Get all events (public)
router.get('/', getEvents);

// 👉 Get a specific event by ID (public)
router.get('/:id', getEventById);

// 👉 Update an event by ID (protected)
router.put('/:id', authMiddleware, updateEvent);

// 👉 Delete an event by ID (protected)
router.delete('/:id', authMiddleware, deleteEvent);

// 👉 ✅ Simple Event List (public, no populate, light version)
router.get('/list/all', getEventList);

export default router;
