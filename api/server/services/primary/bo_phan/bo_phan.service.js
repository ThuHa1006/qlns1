const {
  BaseService
} = require('xc-core');

class BoPhanService extends BaseService {

  constructor(app) {
    super(app);
    this.bo_phan = app.$dbs.primary.bo_phan;
  }

  async create(req, res) {
    let data = await this.bo_phan.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.bo_phan.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.bo_phan.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.bo_phan.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.bo_phan.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.bo_phan.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.bo_phan.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.bo_phan.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.bo_phan.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.bo_phan.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.bo_phan.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.bo_phan.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.bo_phan.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.bo_phan.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.bo_phan.delb(req.body);
    return data;
  }

}

module.exports = BoPhanService;