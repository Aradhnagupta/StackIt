import mongoose from 'mongoose'

const QuestionsSchema = new mongoose.Schema({
    title:{
        type:String,
        required : true,
    },
    description : {
        type:String,
        required: true
    },
    tags: [{type: String}],
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    acceptedAnswer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Answer' 
    },
    votes: {
        type: Number,
        default: 0
    }
},{timestamps: true})