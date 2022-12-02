import express from "express";
import { BidController } from "./bid.controller";

export const bidRouter = express.Router()

bidRouter.post('/create', BidController.createBid)