const { openDb } = require("../libs/sqlite");

const allSql = `
  SELECT * FROM questions;
`;

const singleSql = `
  SELECT * FROM questions where id = ?;
`;

const creatSql = `
INSERT INTO questions (supplierId, title, description) VALUES (?,?,?);
`;

const updateSql = `
UPDATE questions set supplierId = ?, title = ?, description = ? WHERE id = ?;
`;

const deleteSql = `
DELETE FROM questions WHERE id = ?;
`;

const list = async (ctx) => {
  const db = await openDb();
  const result = await db.all(allSql);

  return result;
};

const getSingle = async (ctx) => {
  const db = await openDb();
  const result = await db.get(singleSql, [ctx]);

  return result;
};

const create = async (ctx) => {
  let reqBody = ctx.body;
  const db = await openDb();
  const result = await db.run(creatSql, [reqBody.supplierId, reqBody.title, reqBody.description]);
  return result;
};

const update = async (ctx) => {
  let reqBody = ctx.body;
  let params = ctx.params.id;
  const db = await openDb();
  const result = await db.run(updateSql, [
    reqBody.supplierId,
    reqBody.title,
    reqBody.description,
    params,
  ]);

  return result;
};

const deleteSingle = async (ctx) => {
  let params = ctx.params.id;
  const db = await openDb();
  const result = await db.get(deleteSql, params);

  return result;
};

module.exports = {
  list,
  getSingle,
  create,
  update,
  deleteSingle,
};
