import { Request, Response } from "express";
import { ServerMessages } from "../common/types";
import { User } from "./user.model";

export class UserController {
  static async getUsers (req:Request, res:Response) {
    try {
        const users = await User.findAll() 
        return res.json(users)
    } catch (e) {
     return res.status(500).json({message: ServerMessages.serverErr}) 
    }
  }
}