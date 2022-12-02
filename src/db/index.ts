import { Sequelize } from "sequelize";


export const sequelize = new Sequelize('application_doc', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres'
});