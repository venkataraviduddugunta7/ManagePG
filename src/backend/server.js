import express from "express";
import cors from "cors";
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

const app = express();
const port = 5001;

app.use(cors());
app.use(express.json());

// PostgreSQL Connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "ravireddy",
  port: 5432,
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch(err => console.error("Error connecting to PostgreSQL:", err.stack));

// API Route to Get Tenants
app.get("/tenants", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tenants");
    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
