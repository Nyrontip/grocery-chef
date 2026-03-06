import User from '../models/User';

export class UserRepository {

    async findByEmail(email: string) {
        return await User.findOne({ where: { email } });
    }

    async findById(id: number) {
        return await User.findByPk(id);
    }

    async create(data: { name: string; email: string; passwordHash: string }) {
        return await User.create(data);
    }
}