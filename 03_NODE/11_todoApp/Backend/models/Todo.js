import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
