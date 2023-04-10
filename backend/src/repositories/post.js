import Post from "../models/post.js";
import Category from "../models/category.js";

export default {
  _create: async (data) => {
    const result = data.length
      ? await Post.bulkCreate(data)
      : await Post.create(data);
    return result;
  },
  _find: async (page = 1, limit = 10, where = {}) => {
    let _page = page > 0 ? page : 1;
    let _limit = limit > 0 ? limit : 10;

    const result = await Post.findAll({
      where,
      limit: _limit,
      offset: (_page - 1) * limit,
      raw: true,
      include: Category,
    });
    return result;
  },
  _findById: async (id) => {
    const result = await Post.findByPk(id, { raw: true, include: Category });

    return result;
  },
  _delete: async (id) => {
    const result = await Post.destroy({ where: { id } });

    return result;
  },
  _update: async (id, data) => {
    const result = await Post.update(data, { where: { id } });
  },
};
