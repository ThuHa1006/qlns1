const {
  BaseService
} = require('xc-core');

class PhuCapService extends BaseService {

  constructor(app) {
    super(app);
    this.phu_cap = app.$dbs.primary.phu_cap;
  }

  async create(req, res) {
    let data = await this.phu_cap.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.phu_cap.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.phu_cap.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.phu_cap.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.phu_cap.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.phu_cap.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.phu_cap.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.phu_cap.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.phu_cap.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.phu_cap.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.phu_cap.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.phu_cap.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.phu_cap.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.phu_cap.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.phu_cap.delb(req.body);
    return data;
  }

}

module.exports = PhuCapService;