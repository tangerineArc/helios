import asyncHandler from "express-async-handler";

import * as db from "../db/queries.js";

const getExamples = asyncHandler(async (req, res) => {
  const examples = await db.getALlExamples();
  res.render("index.ejs", { examples });
});

function createExampleGet(req, res) {
  res.render("create-example.ejs", { title: "Create Example" });
}

const createExamplePost = asyncHandler(async (req, res) => {
  const { example_text } = req.body;
  await db.insertExample(example_text);
  res.redirect("/");
});

export { createExampleGet, createExamplePost, getExamples };
