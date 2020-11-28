const {
  BaseService
} = require('xc-core');

class ChamCongService extends BaseService {

  constructor(app) {
    super(app);
    this.cham_cong = app.$dbs.primary.cham_cong;
  }

  async create(req, res) {
    let data = await this.cham_cong.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.cham_cong.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.cham_cong.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.cham_cong.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.cham_cong.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.cham_cong.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.cham_cong.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.cham_cong.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.cham_cong.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.cham_cong.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.cham_cong.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.cham_cong.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.cham_cong.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.cham_cong.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.cham_cong.delb(req.body);
    return data;
  }

}

module.exports = ChamCongService;