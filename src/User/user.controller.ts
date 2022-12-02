import { Request, Response } from "express";
import { User } from "./user.model";

export class UserController {
  static async getUsers (req:Request, res:Response) {
    try {
        const users = await User.findAll() 
        return res.json({users})
    } catch (e) {
      console.log(e)
     return res.json({message: 'Server error'}) 
    }
  }
}