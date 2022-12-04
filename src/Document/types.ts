import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";
import { Request } from 'express';

export interface DocumentI extends Model<InferAttributes<DocumentI>, InferCreationAttributes<DocumentI>> {
  id: CreationOptional<number>
  title: string
  count_bids: CreationOptional<number>
}