const {
  list,
  create,
  getSingle,
  update,
  deleteSingle,
} = require("../db/answers");

const getAll = async () => {
  const results = await list();

  return {
    data: results,
    total: results.length,
  };
};

const getAnswer = async (answer) => {
  const result = await getSingle(answer);

  return {
    data: result,
  };
};

const insertAnswer = async (answer) => {
  const result = await create(answer);

  return {
    data: result,
  };
};

const updateAnswer = async (answer) => {
  const result = await update(answer);

  return {
    data: result,
  };
};

const deleteAnswer = async (answer) => {
  const result = await deleteSingle(answer);

  return {
    data: result,
  };
};

module.exports = {
  getAll,
  getAnswer,
  insertAnswer,
  updateAnswer,
  deleteAnswer,
};
