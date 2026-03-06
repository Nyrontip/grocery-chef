import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Recipe extends Model {
    public id!: number;
    public title!: string;
    public description!: string;
    public steps!: string;
    public isFavorite!: boolean;
    public userId!: number;
    public readonly createdAt!: Date;
}

Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING(150),
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        steps: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        isFavorite: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'recipes',
        timestamps: true,
        createdAt: 'createdAt',
        updatedAt: false,
    }
);

export default Recipe;