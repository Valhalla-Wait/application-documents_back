import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface DocumentI extends Model<InferAttributes<DocumentI>, InferCreationAttributes<DocumentI>> {
  id: CreationOptional<number>
  title: string
  count_bids: CreationOptional<number>
}