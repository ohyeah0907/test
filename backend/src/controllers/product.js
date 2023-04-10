import Product from "../middlewares/product.js";
import ResponseHandler from "../helpers/responseHandler.js";

export default {
  create: async (req, res, next) => {
    try {
      const result = await Product.create(req.body);
      return ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  find: async (req, res, next) => {
    try {
      const { page, limit, ...where } = req.query;
      const result = await Product.find(limit, page, where);
      return ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Product.findById(id);
      return ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Product.delete(id);
      return ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Product.update(req.body, id);
      return ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
};
