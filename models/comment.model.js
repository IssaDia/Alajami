const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    text: {type: String, required: true},
    date: {type: Date,required: true },
    author: {type: String, required: true},

},{
    timestamps: true,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;