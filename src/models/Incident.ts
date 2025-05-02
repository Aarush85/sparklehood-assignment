import mongoose, { Schema, Document } from 'mongoose';

export enum SeverityLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}


export interface IIncident extends Document {
  title: string;
  description: string;
  severity: SeverityLevel;
  reported_at: Date;
}


const IncidentSchema: Schema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  severity: {
    type: String,
    enum: Object.values(SeverityLevel),
    required: true
  },
  reported_at: {
    type: Date,
    default: Date.now
  }
});

const Incident = mongoose.model<IIncident>('Incident', IncidentSchema);

export default Incident;
