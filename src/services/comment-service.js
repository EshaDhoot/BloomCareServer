import CommentRepository from "../repository/comment-repository.js";
import ThreadRepository from "../repository/thread-repository.js";

class CommentService {
    constructor() {
        this.commentRepository = new CommentRepository();
        this.threadRepository = new ThreadRepository();
    }

    async create(threadId, userId, content) {
       
        var thread = await  this.threadRepository.get(threadId);
        if(!thread) {
            throw {message: 'Thread does not exist', code:404 };
        }
        const comment = await this.commentRepository.create({
            content: content,
            userId: userId,
            thread: threadId
        });
        thread.comments.push(comment);
        await thread.save();

        return comment;
    }
}

export default CommentService;