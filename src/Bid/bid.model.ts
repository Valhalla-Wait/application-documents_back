import { DataTypes } from "sequelize";
import { sequelize } from "../db";
import { BidI } from "./types";

export const Bid = sequelize.define<BidI>('bids', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  document_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},{
  timestamps: false
})