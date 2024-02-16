import CommentService from "../services/comment-service.js";

const commentService = new CommentService();

export const createComment = async(req, res) => {
    try {
        const response = await commentService.create(req.body.threadId, req.user.id, req.body.content);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a  new comment',
            err: {},
            data: response
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Unable to create a new comment',
            err: error,
            data: {}
        });
    }
}