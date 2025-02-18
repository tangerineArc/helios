import asyncHandler from "express-async-handler";

import * as db from "../mock-db.js";

import NotFoundError from "../custom-errors/not-found-error.js";

const getExampleById = asyncHandler(async (req, res) => {
  const { exampleId } = req.params;

  const example = await db.getExampleById(Number(exampleId));

  if (!example) {
    throw new NotFoundError("Example not found");
  }

  res.send(`example Name: ${example.name}`);
});

export { getExampleById };
