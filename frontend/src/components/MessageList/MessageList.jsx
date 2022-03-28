import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CardList } from "../Card";

import { listMessages } from "../../services/messages";
import { ROUTE_MESSAGE_CREATE } from "../../config";

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await listMessages();
      setMessages(data);
    };

    fetchMessages();
  }, []);

  return (
    <main>
      <CardList messages={messages.data} />
      <Link
        className="SendMessage"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        to={ROUTE_MESSAGE_CREATE}
      >
        Send a message
      </Link>
    </main>
  );
};

export default MessageList;
