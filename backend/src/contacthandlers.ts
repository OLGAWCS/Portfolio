import { Request, Response } from "express";
import { OkPacket } from "mysql2";
import database from "./database";

const createMessage = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  database
    .query<OkPacket>(
      "INSERT INTO messages (name, email, message) VALUES (?, ?, ?)",
      [name, email, message]
    )
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.status(400).send("Message not submited");
      } else {
        const newMessage = result.insertId;
        res.status(201).json(newMessage.toString());
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
};

module.exports = {
  createMessage,
};
