const {
  list,
  create,
  getSingle,
  update,
  deleteSingle,
} = require("../db/questions");

const getAll = async () => {
  const results = await list();

  return {
    data: results,
    total: results.length,
  };
};

const getQuestion = async (question) => {
  const result = await getSingle(question);

  return {
    data: result,
  };
};

const insertQuestion = async (question) => {
  const result = await create(question);

  return {
    data: result,
  };
};

const updateQuestion = async (question) => {
  const result = await update(question);

  return {
    data: result,
  };
};

const deleteQuestion = async (question) => {
  const result = await deleteSingle(question);

  return {
    data: result,
  };
};

module.exports = {
  getAll,
  getQuestion,
  insertQuestion,
  updateQuestion,
  deleteQuestion,
};
