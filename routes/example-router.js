import { Router } from "express";

import { getExampleById } from "../controllers/example-controller.js";

const exampleRouter = Router();

exampleRouter.get("/", (req, res) => {
  res.send("All examples");
});

exampleRouter.get("/:exampleId", getExampleById);

export { exampleRouter };
