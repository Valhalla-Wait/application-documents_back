import { Request, Response } from "express";
import { ServerMessages } from "../common/types";
import { Document } from "./document.model";

export class DocumentController {
  static async getDocuments (req:Request, res:Response) {
    try {
        const documents = await Document.findAll()
        return res.json(documents)
    } catch (e) {
     return res.status(500).json({message: ServerMessages.serverErr}) 
    }
  }
}