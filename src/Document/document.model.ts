import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { DocumentI } from "./types";

export const Document = sequelize.define<DocumentI>('documents', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  count_bids: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  }
}, {
  timestamps: false
})
