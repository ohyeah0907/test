import express from "express";
import Controller from "../controllers/category.js";
import Validate from "../validates/category.js";

const router = express.Router();

router.param("id", (req, res, next, value) => {
  const error =
    parseInt(value) > 0 ? "" : new Error("Id must be positive number");
  console.log(error);
  next(error);
});
router.get("/", Controller.find);
router.get("/:id", Controller.findById);
router.post("/", Validate.create, Controller.create);
router.put("/:id", Validate.update, Controller.update);
router.delete("/:id", Controller.delete);

export default router;
