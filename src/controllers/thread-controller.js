import ThreadService from "../services/thread-service.js";

const threadService = new ThreadService();

export const createThread = async (req, res) => {

    try{
        const thread = await threadService.create({...req.body, userId:req.user.id});
        return res.status(201).json({
            success: true,
            data: thread,
            error: {},
            message: 'Thread created successfully'
        }); 
    }
     catch (error) {
        return res.status(500).json({
            error_message: error,
            created: false
        });
    }
}