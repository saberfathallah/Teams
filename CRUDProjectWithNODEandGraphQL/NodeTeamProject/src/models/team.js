import mongoose from 'mongoose';

const teamsSchema = mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String },
  description: { type: String },
});

export default mongoose.model('Team', teamsSchema);
