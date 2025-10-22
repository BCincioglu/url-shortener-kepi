import mongoose from 'mongoose';

const UrlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
    trim: true,
  },
  code: { 
    type: String, 
    required: true, 
    unique: true, 
    index: true 
  }
});

export default mongoose.model('Url', UrlSchema);
