import Thread from '../models/threads.js';
import CrudRepository from './crud-repository.js';

class ThreadRepository extends CrudRepository {
    constructor() {
        super(Thread);
    }

    // async create(data) {
    //     try {
    //         const tweet = await Tweet.create(data);
    //         return tweet;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    async getWithComments(id) {
        try {
            const thread = await Thread.findById(id).populate({ path: 'comments' }).lean();
            return thread;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            const thread = await Thread.find();
            return thread;
        } catch (error) {
            console.log(error);
        }
    }

    async find(id) {
        try {
            const thread = await Thread.findById(id).populate({ path: 'likes' });
            return thread;
        } catch (error) {
            console.log(error);
        }
    }
}

export default ThreadRepository;