const express = require("express");
const router = express.Router();
const initSupplierRoutes = require("./suppliers");
const initQuestionRoutes = require("./questions");


router.get("/", (req, res, next) =>
  res.status(200).json({ message: "Welcome to retraced coffee supplier api" })
);

initSupplierRoutes(router);
initQuestionRoutes(router);

module.exports = router;
