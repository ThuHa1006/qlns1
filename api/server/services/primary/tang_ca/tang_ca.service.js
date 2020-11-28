const {
  BaseService
} = require('xc-core');

class TangCaService extends BaseService {

  constructor(app) {
    super(app);
    this.tang_ca = app.$dbs.primary.tang_ca;
  }

  async create(req, res) {
    let data = await this.tang_ca.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.tang_ca.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.tang_ca.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.tang_ca.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.tang_ca.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.tang_ca.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.tang_ca.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.tang_ca.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.tang_ca.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.tang_ca.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.tang_ca.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.tang_ca.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.tang_ca.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.tang_ca.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.tang_ca.delb(req.body);
    return data;
  }

}

module.exports = TangCaService;