import { CreationOptional, InferAttributes, InferCreationAttributes, Model } from "sequelize";

export interface UserI extends Model<InferAttributes<UserI>, InferCreationAttributes<UserI>> {
  id: CreationOptional<number>
  firstname: string
  middlename: string
  surname: string
}