"use strict";

import { Router } from "express";

import { getAllExamples } from "../controllers/index-controller.js";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index.ejs", { title: "Helios" });
});

indexRouter.get("/example-route", getAllExamples);

export default indexRouter;
