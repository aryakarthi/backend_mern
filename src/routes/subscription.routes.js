import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ message: "GET all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ message: "GET subscription details by id" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ message: "CREATE new subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ message: "UPDATE subscription by id" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ message: "DELETE subscription by id" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ message: "GET all subscriptions by user id" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ message: "CANCEL subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ message: "GET upcoming renewals" });
});

export default subscriptionRouter;

// d1fS1EQWUfEupbsl
