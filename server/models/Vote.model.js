import mongoose from 'mongoose'

const VoteSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  answer: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Answer', 
    required: true 
},
  value: { type: Number, 
    enum: [1, -1] 
}, // 1 = upvote, -1 = downvote
},{timestamps: true});

export const Vote = mongoose.model('Vote',VoteSchema)