const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class productService {
  constructor() {}
  async create(data) {
    const rta = await models.Product.create(data);
    return rta;
  }
  async find() {
    const rta = await models.Product.findAll({
      include: ['category'],
    });
    return rta;
  }
  async findOne(id) {
    const rta = await models.Product.findByPk(id);
    if (!rta) {
      throw boom.notFound('User not Found');
    }
    return rta;
  }
  async update(id, changes) {
    const product = await this.findOne(id);
    const rta = await product.update(changes);
    return rta;
  }
  async delete(id) {
    const rta = await this.findOne(id);
    await models.Product.destroy(rta);
    return { id };
  }
}
module.exports = productService;
