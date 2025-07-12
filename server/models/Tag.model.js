import mongoose from 'mongoose'

const TagSchema = new mongoose.Schema({
  name: { 
    type: String, 
    unique: true, 
    required: true 
},
},{timestamps:true});

export const Tag = mongoose.model('Tag',TagSchema)