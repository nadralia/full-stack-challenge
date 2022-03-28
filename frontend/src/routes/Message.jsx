import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CompanyDropdown from "../components/CompanyDropdown";

import { ROUTE_HOME } from "../config";
import { createMessage } from "../services/messages";

const Message = () => {
  let navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [companies, setCompanies] = useState([]);

  const handleSave = async () => {
    const event = new Date().toDateString();

    if (companies && Object.keys(companies).length !== 0) {
      companies.map(async (company) => {
        const title = event.concat(company.id);
        const payload = {
          title: title,
          description: description,
          supplierId: company.id,
        };

        await createMessage(payload);
        navigate(ROUTE_HOME);
      });
    }
  };

  return (
    <main>
      <h2>Message</h2>
      <div
        className="sendMessage"
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <Form>
          <Form.Group>
            <CompanyDropdown
              value={companies}
              onChange={(companies) => setCompanies(companies)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="message"
              rows="5"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={handleSave}>
            Send Message
          </Button>
        </Form>
      </div>
    </main>
  );
};

export default Message;
