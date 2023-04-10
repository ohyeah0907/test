import Model from "../models/product.js";

const _create = async (data) => {
  const created = data.length
    ? await Model.bulkCreate(data)
    : await Model.create(data);

  return created;
};

const _find = async (limit = 10, page = 1, where = {}) => {
  let _limit = limit > 0 ? limit : 10;
  let _page = page > 0 ? page : 1;

  const result = await Model.findAll({
    where,
    limit: _limit,
    offset: (_page - 1) * limit,
    raw: true
  });

  return result;
};

const _findById = async (id) => {
  const result = await Model.findByPk(id, {raw: true});

  return result;
};

const _update = async (data = {}, id) => {
  const result = await Model.update(data, { where: { id } });

  return result;
};

const _delete = async (id) => {
  const result = await Model.destroy({ where: { id } });

  return result;
};

export default {
  _create,
  _find,
  _findById,
  _update,
  _delete,
};
