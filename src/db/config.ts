import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectToDB = async () => {
  try {
    
    const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/sparklehood';

    await mongoose.connect(mongoURI, {
      
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any); 

    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ Could not connect to DB:', err);
    process.exit(1); 
  }
};

export default connectToDB;
