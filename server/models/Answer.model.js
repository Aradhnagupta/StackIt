import mongoose from 'mongoose'

const AnswerSchema = new mongoose.Schema({
  question: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question', 
    required: true 
},
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', required: true 
},
  content: { 
    type: String, 
    required: true 
}, // Rich text (HTML or JSON)
  votes: { 
    type: Number, 
    default: 0 
},
  isAccepted: { type: Boolean, 
    default: false 
}
},{timestamps: true});

export const Answer = mongoose.model("Answer",AnswerSchema)