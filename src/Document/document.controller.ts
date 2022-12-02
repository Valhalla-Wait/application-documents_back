import { Request, Response } from "express";
import { Document } from "./document.model";

export class DocumentController {
  static async getDocuments (req:Request, res:Response) {
    try {
        const documents = await Document.findAll()
        return res.json({documents})
    } catch (e) {
      console.log(e)
     return res.json({message: 'Server error'}) 
    }
  }
}