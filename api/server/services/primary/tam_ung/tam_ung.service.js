const {
  BaseService
} = require('xc-core');

class TamUngService extends BaseService {

  constructor(app) {
    super(app);
    this.tam_ung = app.$dbs.primary.tam_ung;
  }

  async create(req, res) {
    let data = await this.tam_ung.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.tam_ung.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.tam_ung.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.tam_ung.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.tam_ung.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.tam_ung.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.tam_ung.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.tam_ung.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.tam_ung.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.tam_ung.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.tam_ung.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.tam_ung.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.tam_ung.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.tam_ung.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.tam_ung.delb(req.body);
    return data;
  }

}

module.exports = TamUngService;