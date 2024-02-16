import LikeRepository from "../repository/like-repository.js";
import ThreadRepository from "../repository/thread-repository.js";

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.threadRepository = new ThreadRepository();
    }

    async toggleLike(threadId, userId) {
        var thread = await  this.threadRepository.find(threadId);
        const exists = await this.likeRepository.findByUserAndLikeable({
            userId: userId,
            thread: threadId
        });
        if(exists) {
            thread.likes.pull(exists.id);
            await thread.save();
            await exists.deleteOne();
            var isAdded = false;
        } else {
            const newLike = await this.likeRepository.create({
                userId: userId,
                thread: threadId
            });
            thread.likes.push(newLike);
            await thread.save();
            var isAdded = true;
        }
        return isAdded;
    }
}

export default LikeService;