import express from "express";
import { DocumentController } from "./document.controller";

export const documentRouter = express.Router()

documentRouter.get('/get', DocumentController.getDocuments)