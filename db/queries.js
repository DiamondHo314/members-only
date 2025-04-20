const pool = require('./pool.js');

async function registerUser(username, password) {
  await pool.query("INSERT INTO persons (username, password) VALUES ($1, $2)", [username, password]);
}

async function getUser(username) {
  const { rows } = await pool.query("SELECT * FROM persons WHERE username = $1", [username]);
  return rows[0];
}


module.exports = { 
    registerUser,
    getUser,
}
