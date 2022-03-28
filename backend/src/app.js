const express = require("express");
const cors = require("cors");
const createError = require("http-errors");
const path = require("path");
const logger = require("pino-http");
const indexRouter = require("./routes/index");

const loggingOptions = {
  transport: {
    target: "pino-pretty",
  },
};

const allowedOrigins = ["http://localhost:3500"];
const corsOptions = {
  origin: (origin, cb) => {
    const ok = allowedOrigins.includes(origin);
    cb(null, ok);
  },
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

const app = express();

app.use(logger(loggingOptions));
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", indexRouter);

module.exports = app;
