import express from 'express';
import { 
  getAllIncidents, 
  getIncidentById, 
  createIncident, 
  deleteIncident 
} from '../controllers/incidentController';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ 
    status: 'success',
    message: 'Incident API is running'
  });
});

router.get('/incidents', getAllIncidents);

router.get('/incidents/:id', getIncidentById);

router.post('/incidents', createIncident);

router.delete('/incidents/:id', deleteIncident);

export default router; 