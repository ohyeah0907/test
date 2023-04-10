import Model from "../models/category.js";

export default {
  _create: async (data) => {
    const result = data.length
      ? await Model.bulkCreate(data)
      : await Model.create(data);
    return result;
  },
  _find: async (page = 1, limit = 10, where = {}) => {
    let _page = page > 0 ? page : 1;
    let _limit = limit > 0 ? limit : 10;

    const result = await Model.findAll({
      where,
      limit: _limit,
      offset: (_page - 1) * limit,
      raw: true,
    });

    return result;
  },
  _findById: async (id) => {
    const result = await Model.findByPk(id, { raw: true });

    return result;
  },
  _delete: async (id) => {
    const result = await Model.destroy({ where: { id } });

    return result;
  },
  _update: async (id, data) => {
    const result = await Model.update(data, { where: { id } });
  },
};
