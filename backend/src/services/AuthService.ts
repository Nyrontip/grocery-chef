import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { UserRepository } from '../repositories/UserRepository';

export class AuthService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async register(name: string, email: string, password: string) {
        const existing = await this.userRepository.findByEmail(email);
        if (existing) {
            throw new Error('Email is already registered');
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const user = await this.userRepository.create({ name, email, passwordHash });

        return this.generateToken({
            id: user.id,
            email: user.email,
            name: user.name
        });
    }

    async login(email: string, password: string) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Email not found');
        }

        const validPassword = await bcrypt.compare(password, user.passwordHash);
        if (!validPassword) {
            throw new Error('Wrong password');
        }

        return this.generateToken({
            id: user.id,
            email: user.email,
            name: user.name
        });
    }

    generateToken(userData: { id: number; email: string; name: string }) {
        const token = jwt.sign(
            userData,
            process.env.JWT_SECRET as string,
            { expiresIn: '2h' }
        );

        return { token, user: userData };
    }
}
