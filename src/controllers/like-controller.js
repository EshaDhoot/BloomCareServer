import LikeService from '../services/like-service.js';

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(req.body.threadId, req.user.id);
        res.status(200).json({
            data: response,
            err: {},
            message: 'successfully toggled like',
            success: true
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data: {},
            err: error,
            message: 'something went wrong',
            success: false
        })
    }
}