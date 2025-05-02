import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDB from './db/config';
import incidentRoutes from './routes/incidentRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());


app.use('/', incidentRoutes);


app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
});


const startServer = async () => {
  try {
    await connectToDB();
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer(); 