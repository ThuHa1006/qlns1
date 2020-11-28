const {
  BaseService
} = require('xc-core');

class GiayToService extends BaseService {

  constructor(app) {
    super(app);
    this.giay_to = app.$dbs.primary.giay_to;
  }

  async create(req, res) {
    let data = await this.giay_to.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.giay_to.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.giay_to.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.giay_to.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.giay_to.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.giay_to.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.giay_to.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.giay_to.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.giay_to.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.giay_to.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.giay_to.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.giay_to.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.giay_to.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.giay_to.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.giay_to.delb(req.body);
    return data;
  }

}

module.exports = GiayToService;