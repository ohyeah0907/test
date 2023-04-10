import Repository from '../repositories/product.js';

const Product = {
    create: async (data) => await Repository._create(data),
    find: async (limit, page, where) => await Repository._find(limit, page, where),
    findById: async (id) => await Repository._findById(id),
    delete: async (id) => await Repository._delete(id),
    update: async (data, id) => await Repository._update(data, id)
}

export default Product;