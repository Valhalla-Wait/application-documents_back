import { Request, Response } from "express";
import { Document } from "../Document/document.model";
import { Bid } from "./bid.model";
import { CustomRequest } from "./types";

export class BidController {
  static async createBid (req:CustomRequest, res:Response) {
    try {
        //FIND DUPLICATE DOC
        const findDublicateDoc = await Document.findOne({where: {title: req.body.document_title}})
        if (findDublicateDoc) {
          const findDublicateBid = await Bid.findOne({where: {user_id: req.body.user_id, document_id: findDublicateDoc.id}})

          //FIND DUBLICATE BID
          if(findDublicateBid) return res.json({message: 'вы уже заявляли', findDublicateBid})

          //CREATE BID
          await Bid.create({
            user_id: req.body.user_id,
            document_id: findDublicateDoc.id
          })
          await Document.increment({count_bids: 1}, {where: {id: findDublicateDoc.id}})

          return res.json({message: 'заявка создана'})
        }

        //CREATE NEW DOC AND BID
        const newDocument = await Document.create({
          title: req.body.document_title
        })
        await Bid.create({
          user_id: req.body.user_id,
          document_id: newDocument.id
        })
        await Document.increment({count_bids: 1}, {where: {id: newDocument.id}})
        return res.json({message: 'заявка создана'})
    } catch (e) {
      console.log(e)
      return res.json({message: 'Server error'}) 
    }
  }
}