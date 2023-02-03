import React from "react";
import axios from "axios";
import { useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5050/contactme", {
        name,
        email,
        message,
      })
      .then((res) => res.data);
  };

  return (
    <div className="block max-w-[1100px] m-auto pt-5 p-2">
      <h2 className="text-[#20b2aa] text-lg md:text-xl lg:text-xl uppercase font-bold tracking-wider">
        Contact me
      </h2>
      <div className="max-w-[500px] w-full h-auto shadow-xl shadow-gray-400 rounded-xl p-2 m-auto md:m-2 lg:p-4">
        <form className="flex flex-col p-2" onSubmit={handleSubmit}>
          <label className="text-sm uppercase mt-2" htmlFor="name">
            Your name:
          </label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-sm uppercase mt-2" htmlFor="email">
            Your email:
          </label>
          <input
            className="border-2 rounded-lg p-2 flex border-gray-300"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-sm uppercase mt-2" htmlFor="message">
            Message text:
          </label>
          <textarea
            className="border-2 rounded-lg p-2 border-gray-300"
            rows="7"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="px-5 py-1 w-fit mt-4 self-center shadow-xl shadow-gray-400 rounded-2xl uppercase bg-gradient-to-r from-[#20b2aa] to-[#99ede8]"
            type="submit"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
