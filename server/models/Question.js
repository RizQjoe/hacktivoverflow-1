'use strict'

const mongoose = require('mongoose')
const answareSchema = require('./Answer')
const Schema = mongoose.Schema

const questionShema = Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author: {
        type:String,
        required:true
    },
    answer: [answerSchema],
    upvotes: [{type: Schema.Types.ObjectId, ref: 'User'}],
    downvotes: [{type: Schema.Types.ObjectId, ref: 'User'}]
},{
  timestamps:true
})

const Question = mongoose.model('Question',questionShema)
module.exports = Question;