const {
  BaseService
} = require('xc-core');

class TrangThaiService extends BaseService {

  constructor(app) {
    super(app);
    this.trang_thai = app.$dbs.primary.trang_thai;
  }

  async create(req, res) {
    let data = await this.trang_thai.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.trang_thai.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.trang_thai.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.trang_thai.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.trang_thai.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.trang_thai.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.trang_thai.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.trang_thai.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.trang_thai.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.trang_thai.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.trang_thai.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.trang_thai.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.trang_thai.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.trang_thai.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.trang_thai.delb(req.body);
    return data;
  }

}

module.exports = TrangThaiService;