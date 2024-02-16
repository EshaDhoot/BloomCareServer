import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    thread: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Thread'
    },
}, {timestamps: true});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;

