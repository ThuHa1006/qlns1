const {
  BaseService
} = require('xc-core');

class CapBacService extends BaseService {

  constructor(app) {
    super(app);
    this.cap_bac = app.$dbs.primary.cap_bac;
  }

  async create(req, res) {
    let data = await this.cap_bac.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.cap_bac.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.cap_bac.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.cap_bac.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.cap_bac.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.cap_bac.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.cap_bac.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.cap_bac.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.cap_bac.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.cap_bac.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.cap_bac.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.cap_bac.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.cap_bac.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.cap_bac.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.cap_bac.delb(req.body);
    return data;
  }

}

module.exports = CapBacService;