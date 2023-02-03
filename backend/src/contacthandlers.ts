const database = require("./database");
import { Request, Response } from "express";

const getAllMessages = async (req:Request, res:Response) => {
    database.query("SELECT * FROM messages")
      .then((result) => {
        res.status(200).json(result[0]);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Internal Server Error");
      });
  };

const createMessage = async (req:Request, res:Response) => {
  const { name, email, message } = req.body;
  database
    .query(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    )
    .then((result) => {
      if (result[0].affectedRows === 0) {
        res.status(400).send("Message could not be send");
      } else {
        const newMessageID = result[0].insertId;
        res.location(result[0].insertId).sendStatus(201);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};


    

module.exports = {
    createMessage,
    getAllMessages
};