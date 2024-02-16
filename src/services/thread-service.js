import Thread from "../models/threads.js";

class ThreadService {

    async create(data) {
        try {
            const thread = await Thread.create(data);
            return thread;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll() {
        try {
            const threads = await Thread.find({});
            return threads;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default ThreadService;