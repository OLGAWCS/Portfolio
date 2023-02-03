const express = require("express");
const contactHandlers = require("./contactHandlers");

const contactRouter = express.Router();

// Routes related to the whole collection

contactRouter.get("/messages", contactHandlers.getAllMessages);
contactRouter.post("/", contactHandlers.createMessage);



module.exports = contactRouter;