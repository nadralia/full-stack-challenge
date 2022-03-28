const {
  getAll,
  getAnswer,
  insertAnswer,
  updateAnswer,
  deleteAnswer,
} = require("../services/answers");

const getAllAnswers = async (req, res) => {
  const answers = await getAll();
  return res.json(answers);
};

const findOneById = async (req, res) => {
  const answer = await getAnswer(req);
  return res.json(answer);
};

const createAnswer = async (req, res) => {
  const answer = await insertAnswer(req);
  return res.json(answer);
};

const editAnswer = async (req, res) => {
  const answer = await updateAnswer(req);
  return res.json(answer);
};

const deleteAnswerById = async (req, res) => {
  const answer = await deleteAnswer(req);
  return res.json(answer);
};

module.exports = (router) => {
  router.get("/answers", getAllAnswers);
  router.get("/answer/:id", findOneById);
  router.post("/questions/:id", createAnswer);
  router.put("/answers/:id", editAnswer);
  router.delete("/answers/:id", deleteAnswerById);

  return router;
};
