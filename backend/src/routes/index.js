const express = require("express");
const router = express.Router();
const initSupplierRoutes = require("./suppliers");
const initQuestionRoutes = require("./questions");
const initAnswerRoutes = require("./answers");

router.get("/", (req, res, next) =>
  res.status(200).json({ message: "Welcome to retraced coffee supplier api" })
);

initSupplierRoutes(router);
initQuestionRoutes(router);
initAnswerRoutes(router);

module.exports = router;
