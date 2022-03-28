const { list } = require("../db/suppliers");

const getAll = async () => {
  const results = await list();

  return {
    data: results,
    total: results.length,
  };
};

module.exports = {
  getAll,
};
