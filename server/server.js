import express from 'express';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const client = new Client({
  user: 'stephenpritchard',
  database: 'conjugado',
  host: 'localhost',
  port: 5432,
});
await client.connect();

app.use(express.json());

const query = {
  name: 'test',
  text: 'SELECT * FROM pastparticiple p',
};

const result = await client.query(query);

console.log(result);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
