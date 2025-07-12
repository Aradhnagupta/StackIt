import mongoose from 'mongoose'

const NotificationSchema = new mongoose.Schema({
  recipient: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  type: { type: String, 
    enum: ['answer', 'comment', 'mention'],
    required: true 
},
  sourceUser: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
},
  question: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'Question' 
},
  answer: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Answer' 
},
  isRead: { 
    type: Boolean, 
    default: false
 },
},{timestamps:true});

export const Notification = mongoose.model('Notification',NotificationSchema)