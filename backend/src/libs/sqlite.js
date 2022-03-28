const path = require("path");
const fs = require("fs");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const filename = path.join(__dirname, "..", "coffee4.db");

const seed = (db) => {
  console.log("seeding db");
  const createTableSql = `
  CREATE TABLE IF NOT EXISTS suppliers (
  id varchar(32) NOT NULL,
  name varchar(128) NOT NULL,

  PRIMARY KEY (id));
`;

  const createTableQuestionSql = `
CREATE TABLE IF NOT EXISTS questions (
  id INTEGER NOT NULL,
  supplierId INTEGER NOT NULL,
  title varchar(128) NOT NULL,
  description varchar(128) NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (supplierId) REFERENCES suppliers(id)
);
`;

  const createTableAnswerSql = `
CREATE TABLE IF NOT EXISTS answers (
  id INTEGER NOT NULL,
  questionId INTEGER NOT NULL,
  supplierId INTEGER NOT NULL,
  textContent varchar(128) NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (questionId) REFERENCES questions(id),
  FOREIGN KEY (supplierId) REFERENCES suppliers(id)
);
`;

  db.run(createTableSql, (err, _) => {
    if (err) {
      throw err;
    }

    const insertSql = `
INSERT INTO suppliers 
  (
    id,
    name
  ) VALUES 
  (
    'green-coffee-co',
    'The Green Coffee Company'
  ),
  (
    'organic-capsules-co',
    'Organic Capsules'
  ),
  (
    'we-love-coffee',
    'We <3 Coffee'
  );  
`;
    db.run(createTableQuestionSql);
    db.run(createTableAnswerSql);
    db.run(insertSql, (err, _) => {
      if (err) {
        throw err;
      }
      console.log("db seeded");
      db.close();
    });
  });
};

const exists = fs.existsSync(filename);
if (!exists) {
  const db = new sqlite3.Database(filename);
  seed(db);
}

const openDb = async () =>
  open({
    filename,
    driver: sqlite3.cached.Database,
  });

module.exports = {
  openDb,
};
