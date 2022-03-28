const { openDb } = require("../libs/sqlite");

const sql = `
  SELECT id, name
  FROM suppliers;
`;

const list = async (ctx) => {
  const db = await openDb();
  const result = await db.all(sql);

  return result;
};

module.exports = {
  list,
};
