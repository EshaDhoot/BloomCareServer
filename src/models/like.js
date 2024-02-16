import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    thread: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Thread'
    },

}, {timestamps: true});


const Like = mongoose.model('Like', likeSchema);
export default Like;