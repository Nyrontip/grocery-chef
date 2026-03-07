import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
console.log("DB_PORT:", process.env.DB_PORT);
console.log("DB_HOST:", process.env.DB_HOST);
const sequelize = new Sequelize(
  process.env.DB_NAME as string,
  process.env.DB_USER as string,
  process.env.DB_PASSWORD as string,
  {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
    },
    logging: false,
  },
);

export default sequelize;

