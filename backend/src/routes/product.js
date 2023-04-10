import express from "express";
import Controller from "../controllers/product.js";
import Validate from "../validates/product.js";

const router = express.Router();

router.param("id", (req, res, next, value) => {
  const error =
    parseInt(value) > 0 ? "" : new Error("Id must be positive number");
  console.log(error);
  next(error);
});
router.post("/", Validate.create, Controller.create);
router.get("/", Controller.find);
router.get("/:id", Controller.findById);
router.delete("/:id", Controller.delete);
router.put("/:id", Validate.update, Controller.update);

export default router;
