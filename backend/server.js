import express from 'express';
import cors from 'cors';
import 'dotenv/config';

// App config
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Endpoints
app.get('/api/');

// Listening the app
app.listen(PORT, console.log(`Server is running on port ${PORT}`));