import { Request, Response } from 'express';
import Incident, { SeverityLevel } from '../models/Incident';
import mongoose from 'mongoose';


export const getAllIncidents = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const allData = await Incident.find().sort({ reported_at: -1 });
    res.status(200).json(allData);
  } catch (err) {
    console.error('Something went wrong while fetching incidents:', err);
    res.status(500).json({ message: 'Server blew up. Try again maybe?' });
  }
};


export const getIncidentById = async (req: Request, res: Response): Promise<void> => {
  try {
    const incidentId = req.params.id;

    
    if (!mongoose.Types.ObjectId.isValid(incidentId)) {
      res.status(400).json({ message: "This ID doesn't look right." });
      return;
    }

    const foundIncident = await Incident.findById(incidentId);

    if (!foundIncident) {
      
      res.status(404).json({ message: 'No incident found with this ID.' });
      return;
    }

    res.status(200).json(foundIncident);
  } catch (err) {
    console.error('DB call failed or something:', err);
    res.status(500).json({ message: "Server error - we'll look into it." });
  }
};


export const createIncident = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, severity } = req.body;

    
    if (!title || !description || !severity) {
      res.status(400).json({ message: 'Missing stuff. Title, description, and severity needed.' });
      return;
    }

    
    const uppercaseSeverity = severity.toUpperCase();
    if (!Object.values(SeverityLevel).includes(uppercaseSeverity as SeverityLevel)) {
      res.status(400).json({ message: 'Severity should be one of: LOW, MEDIUM, HIGH' });
      return;
    }

    
    const freshIncident = new Incident({
      title,
      description,
      severity: uppercaseSeverity,
      reported_at: new Date()  
    });

    const savedIncident = await freshIncident.save();

    res.status(201).json(savedIncident);
  } catch (err) {
    console.error('Something exploded while creating the incident:', err);
    res.status(500).json({ message: 'Could not save the incident, try again later.' });
  }
};

export const deleteIncident = async (req: Request, res: Response): Promise<void> => {
  try {
    const incidentId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(incidentId)) {
      res.status(400).json({ message: 'Invalid ID.' });
      return;
    }
    const deletedIncident = await Incident.findByIdAndDelete(incidentId);
    if (!deletedIncident) {
      res.status(404).json({ message: 'No incident found with this ID.' });
      return;
    }
    res.status(200).json({ message: 'Incident deleted successfully.' });
  } catch (err) {
    console.error('Error deleting incident:', err);
    res.status(500).json({ message: 'Could not delete incident.' });
  }
};
