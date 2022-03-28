const {
  getAll,
  insertQuestion,
  getQuestion,
  deleteQuestion,
  updateQuestion,
} = require("../services/questions");

const all = async (req, res) => {
  const questions = await getAll();
  return res.json(questions);
};

const findQuestionById = async (req, res) => {
  let params = req.params.id;
  const questions = await getQuestion(params);
  return res.json(questions);
};
const createQuestion = async (req, res) => {
  const questions = await insertQuestion(req);

  const { lastID } = questions.data;
  const question = await getQuestion(lastID);

  return res.json(question);
};

const editQuestion = async (req, res) => {
  const questions = await updateQuestion(req);
  return res.json(questions);
};

const deleteQuestionById = async (req, res) => {
  const questions = await deleteQuestion(req);
  return res.json(questions);
};

module.exports = (router) => {
  router.get("/questions", all);
  router.get("/questions/:id", findQuestionById);
  router.post("/questions", createQuestion);
  router.put("/questions/:id", editQuestion);
  router.delete("/questions/:id", deleteQuestionById);

  return router;
};
