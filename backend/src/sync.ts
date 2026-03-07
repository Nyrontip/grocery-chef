import sequelize from './config/database';
import { User, Recipe, Ingredient } from './models/index';
//import bcrypt from 'bcryptjs';

const syncDatabase = async () => {
    try {
        console.log('📦 Loading models:', User.name, Recipe.name, Ingredient.name);

        await sequelize.authenticate();
        console.log('✅ Database connected!');

        await sequelize.sync({ alter: true });
        console.log('✅ Database synced!');

        // Create seed de usuario si no existe
        // const existing = await User.findOne({ where: { email: 'admin@recetario.com' } });
        // if (!existing) {
        //     const passwordHash = await bcrypt.hash('123', 10);
        //     await User.create({
        //         name: 'Admin',
        //         email: 'admin@recetario.com',
        //         passwordHash,
        //     });
        //     console.log('👤 Seed user created: admin@recetario.com');
        // }

    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        process.exit(1);
    }
};

syncDatabase();