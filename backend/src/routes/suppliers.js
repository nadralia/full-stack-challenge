const { getAll } = require("../services/suppliers");

const all = async (req, res) => {
  const suppliers = await getAll();
  return res.json(suppliers);
};

module.exports = (router) => {
  router.get("/suppliers", all);

  return router;
};
