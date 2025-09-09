import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';

import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
const client = new Client({
  user: 'stephenpritchard',
  database: 'conjugado',
  host: 'localhost',
  port: 5432,
});
await client.connect();

app.use(express.json());

const testQuery1 = {
  name: 'test2',
  text: "SELECT infinitive, infinitive_english FROM infinitive WHERE infinitive LIKE 'ab%'",
};

const result = await client.query(testQuery1);

console.log(result);

app.get('/', (req, res) => {
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
