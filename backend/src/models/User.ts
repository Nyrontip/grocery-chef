import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public passwordHash!: string;
    public readonly createdAt!: Date;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(150),
            allowNull: false,
            unique: true,
        },
        passwordHash: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: false,
    }
);

export default User;