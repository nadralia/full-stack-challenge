const { openDb } = require("../libs/sqlite");

const allSql = `
  SELECT * FROM answers;
`;

const singleSql = `
  SELECT * FROM answers where id = ?;
`;

const creatSql = `
INSERT INTO answers (questionId, supplierId, textContent) VALUES (?,?,?);
`;

const updateSql = `
UPDATE answers set textContent = ? WHERE id = ?;
`;

const deleteSql = `
DELETE FROM answers WHERE id = ?;
`;

const list = async (ctx) => {
  const db = await openDb();
  const result = await db.all(allSql);

  return result;
};

const getSingle = async (ctx) => {
  let params = ctx.params.id;
  const db = await openDb();
  const result = await db.get(singleSql, [params]);

  return result;
};

const create = async (ctx) => {
  let reqBody = ctx.body;
  let params = ctx.params.id;
  const db = await openDb();
  const result = await db.run(creatSql, [
    params,
    reqBody.supplierId,
    reqBody.textContent,
  ]);
  return result;
};

const update = async (ctx) => {
  let reqBody = ctx.body;
  let params = ctx.params.id;
  const db = await openDb();
  const result = await db.run(updateSql, [reqBody.textContent, params]);

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
