import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./routes/about";
import Home from "./routes/home";
import Suppliers from "./routes/suppliers";
import Message from "./routes/Message";

import "./index.css";

import { ROUTE_MESSAGE_CREATE } from "./config";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path={ROUTE_MESSAGE_CREATE} element={<Message />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
