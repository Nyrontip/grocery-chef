import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Ingredient extends Model {
    public id!: number;
    public name!: string;
    public quantity!: number;
    public unit!: string;
    public recipeId!: number;
}

Ingredient.init(
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
        quantity: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        unit: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        recipeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'ingredients',
        timestamps: false,
    }
);

export default Ingredient;