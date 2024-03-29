import UserRepository from "../repository/user-repository.js";

class UserService {
    
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.findBy({email});
            return user;
        } catch (error) {
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.getUserByEmail(data.email);
            if(!user) {
                throw {error: 'No user Found'};
                // throw Error('No user Found');
       
            }
            if(!user.comparePassword(data.password)) {
                throw {error: 'Incorrect Password'};
                // throw Error('Incorrect Password');
            }

            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;