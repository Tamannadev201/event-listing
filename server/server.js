import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import api from './api.js';
import authRoutes from './routes/authRoutes.js';
import eventRoutes from './routes/eventRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('MongoDB connected');
    const PORT = process.env.PORT || 5000;
HEAD:server/server.js
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} 🚀`);
 c5d0f9bb53aa2850c88c190b5af3a3cd962bc8e:server/api/server.js
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));

  export default app;
