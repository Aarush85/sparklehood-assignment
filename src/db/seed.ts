import mongoose from 'mongoose';
import Incident, { SeverityLevel } from '../models/Incident';
import connectToDB from './config';


const sampleIncidents = [
  {
    title: 'Login page error',
    description: 'Users getting a 500 error when submitting login form',
    severity: SeverityLevel.HIGH,
    reported_at: new Date()
  },
  {
    title: 'Spelling mistake on homepage',
    description: 'The word "success" is spelled wrong lol',
    severity: SeverityLevel.LOW,
    reported_at: new Date()
  },
  {
    title: 'Payment delay',
    description: 'Some payments are taking too long to process',
    severity: SeverityLevel.MEDIUM,
    reported_at: new Date()
  }
];

const seedData = async () => {
  try {
    await connectToDB();
    
    
    await Incident.deleteMany({});
    
    
    await Incident.insertMany(sampleIncidents);
    
    console.log('Seeded the database successfully');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
};

seedData();
