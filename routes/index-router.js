import { Router } from "express";

const indexRouter = Router();

const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
];

indexRouter.get("/", (req, res) => {
  res.render("index.ejs", {
    message: "God of the Sun",
    links: links,
  });
});

indexRouter.get("/about", (req, res) => {
  res.send("About");
});

indexRouter.get("/contact", (req, res) => {
  res.send("Here's how you can contact me.");
});

indexRouter.post("/contact", (req, res) => {
  res.send("You have successfully contacted me.");
});

export { indexRouter };
