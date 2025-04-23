import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ message: "User created" });
  console.log(req.body);
});

authRouter.post("/sign-in", (req, res) => {
  res.send({ message: "User signed in" });
  console.log(req.body);
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ message: "User signed out" });
  console.log(req.body);
});

export default authRouter;
