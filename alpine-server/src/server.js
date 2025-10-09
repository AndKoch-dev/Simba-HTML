import express from "express";
import pkg from "pg";
const { Pool } = pkg;

const app = express();
const port = 80;

const pool = new Pool({
  host: "postgres-db",
  user: "admin",
  password: "123456",
  database: "simba_db",
  port: 5432
});

app.get("/api", (req, res) => {
  res.send("API is working");
});

app.get("/api/users", async (req, res) => {
  try {
   const result = await pool.query("SELECT * FROM users;");
   res.json(result.rows);
} catch (err) {
   console.error("request error", err.message);
   res.status(500).send("error on server");
}

});

app.listen(port, () => {
  console.log(`API server work on port ${port}`);
}
);
