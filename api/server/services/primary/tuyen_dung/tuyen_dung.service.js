const {
  BaseService
} = require('xc-core');

class TuyenDungService extends BaseService {

  constructor(app) {
    super(app);
    this.tuyen_dung = app.$dbs.primary.tuyen_dung;
  }

  async create(req, res) {
    let data = await this.tuyen_dung.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.tuyen_dung.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.tuyen_dung.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.tuyen_dung.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.tuyen_dung.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.tuyen_dung.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.tuyen_dung.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.tuyen_dung.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.tuyen_dung.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.tuyen_dung.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.tuyen_dung.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.tuyen_dung.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.tuyen_dung.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.tuyen_dung.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.tuyen_dung.delb(req.body);
    return data;
  }

}

module.exports = TuyenDungService;