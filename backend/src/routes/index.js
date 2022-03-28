const express = require("express");
const router = express.Router();
const initSupplierRoutes = require("./suppliers");

router.get("/", (req, res, next) =>
  res.status(200).json({ message: "Welcome to retraced coffee supplier api" })
);

initSupplierRoutes(router);

module.exports = router;
