import Post from '../middlewares/post.js'
import ResponseHandler from "../helpers/responseHandler.js";

export default {
  create: async (req, res, next) => {
    try {
      const result = await Post.create(req.body);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  find: async (req, res, next) => {
    try {
      const { page, limit, ...where } = req.query;
      const result = await Post.find(page, limit, where);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  findById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Post.findById(id);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Post.delete(id);
      ResponseHandler.success(res, result);
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await Post.update(id, req.body)
        ResponseHandler.success(res, result);
    } catch(error) {
        next(error)
    }
  },
};