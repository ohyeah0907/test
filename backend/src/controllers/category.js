import Category from "../middlewares/category.js";
import ResponseHandler from "../helpers/responseHandler.js";

export default {
  create: async (req, res, next) => {
    try {
      const result = await Category.create(req.body);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  find: async (req, res, next) => {
    try {
      const { page, limit, ...where } = req.query;
      const result = await Category.find(page, limit, where);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Category.findById(id);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Category.delete(id);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await Category.update(id, req.body)
        ResponseHandler.success(res, result);
    } catch(error) {
        next(error)
    }
  },
};
