import { Request } from "express";
import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface BidI extends Model<InferAttributes<BidI>, InferCreationAttributes<BidI>> {
  id: CreationOptional<number>
  user_id: number
  document_id: number
}

type RequestBodyType = {
  document_title: string
  user_id: number
}

export interface CustomRequest extends Request {
  body: RequestBodyType
}