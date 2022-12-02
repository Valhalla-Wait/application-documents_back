import { DataTypes } from "sequelize";
import { Bid } from "../Bid/bid.model";
import { sequelize } from "../db";
import { UserI } from "./types";

export const User = sequelize.define<UserI>('users', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  firstname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  middlename: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  surname: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
}, {
  timestamps: false
})
