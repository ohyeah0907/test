import Repository from "../repositories/category.js";

const Category = {
  create: async (data) => await Repository._create(data),
  find: async (page , limit, where) => await Repository._find(page, limit, where),
  findById: async (id) => await Repository._findById(id),
  delete: async (id) => await Repository._delete(id),
  update: async (id, data) => await Repository._update(id, data)
};

export default Category;
