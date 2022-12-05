import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('bids', 'valhalla', 'ifvIAj9ZEpfszrSvJeOK8eTHVu3Rnm6W', {
  host: 'dpg-ce6akrda4991ueuo5uf0-a',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});