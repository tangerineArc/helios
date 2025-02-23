#! /usr/bin/env node

"use strict";

import "dotenv/config";
import pg from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS examples (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  example_text VARCHAR ( 255 )
);

INSERT INTO examples (example_text)
VALUES
  ('Zeus'),
  ('Poseidon'),
  ('Hades');
`;

async function main() {
  console.log("seeding started ...");

  const client = new pg.Client({
    connectionString: process.env.DB_CONNECTION_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log("... seeding finished");
}

main();
