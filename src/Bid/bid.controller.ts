import { Response } from "express";
import { ServerMessages } from "../common/types";
import { Document } from "../Document/document.model";
import { Bid } from "./bid.model";
import { CustomRequest } from "./types";

export class BidController {
  static async createBid (req:CustomRequest, res:Response) {
    try {
        const findDocument = await Document.findOne({where: {title: req.body.document_title}})
        
        if (!findDocument) {
          const createNewDocument = await Document.create({
            title: req.body.document_title
          })
          await Bid.create({
            user_id: req.body.user_id,
            document_id: createNewDocument.id
          })
          await Document.increment({count_bids: 1}, {where: {id: createNewDocument.id}})
          return res.json({ message: ServerMessages.bidSuccess})
        }

        const findDuplicateBid = await Bid.findOne({where: {user_id: req.body.user_id, document_id: findDocument.id}})

        if(findDuplicateBid) return res.status(400).json({message: ServerMessages.bidDuplicate})

        await Bid.create({
          user_id: req.body.user_id,
          document_id: findDocument.id
        })

        await Document.increment({count_bids: 1}, {where: {id: findDocument.id}})

        return res.json({message: ServerMessages.bidSuccess})

    } catch (e) {
      console.log(e)
      return res.status(500).json({message: ServerMessages.serverErr}) 
    }
  }
}