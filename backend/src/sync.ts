import sequelize from './config/database';

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected!');
        await sequelize.sync({ alter: true });
        console.log('✅ Database synced!');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
        process.exit(1);
    }
};

syncDatabase();