const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class categoryService {
  constructor() {
  }
  async create(data) {
    const rta = await models.Category.create(data);
  }
  async find() {
    const rta = await models.Category.findAll();
    return rta;
  }
  async findOne(id) {
    const rta = await models.Category.findByPk(id); 
    if(!rta){
      throw boom.notFound('User not Found');
    }
    return rta;
  }
  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }
  async delete(id) {
    const category = await this.findOne(id);
    const rta = await category.destroy();
    return{id}
  }
}
module.exports = categoryService;
