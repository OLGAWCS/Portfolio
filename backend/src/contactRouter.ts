import express from "express";
const contactHandlers = require("./contactHandlers");

const contactRouter = express.Router();

// Routes related to the whole collection


contactRouter.post("/contactme", contactHandlers.createMessage);



module.exports = contactRouter;