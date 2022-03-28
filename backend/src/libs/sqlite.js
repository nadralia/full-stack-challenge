const path = require("path");
const fs = require("fs");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const filename = path.join(__dirname, "..", "coffee.db");

const seed = (db) => {
  console.log("seeding db");
  const createTableSql = `
CREATE TABLE IF NOT EXISTS suppliers (
  id varchar(32) NOT NULL,
  name varchar(128) NOT NULL,

  PRIMARY KEY (id)
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
