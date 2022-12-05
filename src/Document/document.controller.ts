import { Request, Response } from "express";
import { ServerMessages } from "../common/types";
import { sequelize } from "../db";
import { Document } from "./document.model";

export class DocumentController {
  static async getDocuments (req:Request, res:Response) {
    try {
        const documents = await Document.findAll({order: sequelize.literal('count_bids DESC'),})
        return res.json(documents)
    } catch (e) {
      console.log(e)
     return res.status(500).json({message: ServerMessages.serverErr}) 
    }
  }
}