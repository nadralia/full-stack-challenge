import "bootstrap/dist/css/bootstrap.min.css";
import "react-widgets/dist/css/react-widgets.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./routes/about";
import Home from "./routes/home";
import Suppliers from "./routes/suppliers";
import Message from "./routes/Message";
import Answer from "./routes/Answer";

import "./index.css";

import { ROUTE_MESSAGE_CREATE, ROUTE_MESSAGE_EDIT } from "./config";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path={ROUTE_MESSAGE_CREATE} element={<Message />} />
          <Route path={ROUTE_MESSAGE_EDIT} element={<Answer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
