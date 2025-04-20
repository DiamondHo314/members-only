const { Client } = require("pg");
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS persons (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  password VARCHAR ( 255 )
);

INSERT INTO persons (username, password) 
VALUES
  ('pippi', 'broder');
`;

async function main() {
  console.log("populating db...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();