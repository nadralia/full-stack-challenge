import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

import { ROUTE_HOME } from "../config";
import { createAnswer } from "../services/answers";

const Answer = () => {
  let navigate = useNavigate();
  const { questionId } = useParams();
  const [textContent, setTextContent] = useState([]);

  //Todo pick supplierId from global state
  const supplierId = "green-coffee-co";

  const handleSave = async () => {
    const payload = { supplierId, textContent };
    console.log("----");
    await createAnswer(questionId, payload);
    navigate(ROUTE_HOME);
  };

  return (
    <main>
      <h2>Answer</h2>

      <div
        className="sendMessage"
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <Form>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="message"
              rows="5"
              value={textContent}
              onChange={(event) => setTextContent(event.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSave}>
            Answer Question
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default Answer;
