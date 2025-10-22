import mongoose from 'mongoose';
import 'dotenv/config';

let isConnected = false;

export const connectDB = async () => {

  try {
    if (isConnected) return mongoose.connection;
    
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error('MONGO_URI .env içinde tanimli olmali');

    await mongoose.connect(uri);
    console.log("✅ MongoDB baglantisi basarili");
    return mongoose.connection;

  } catch (err) {
    console.error("❌ MongoDB baglanti hatasi:", err?.message || err);
    process.exit(1);
  }

};