const {
  BaseService
} = require('xc-core');

class PhieuLuongService extends BaseService {

  constructor(app) {
    super(app);
    this.phieu_luong = app.$dbs.primary.phieu_luong;
  }

  async create(req, res) {
    let data = await this.phieu_luong.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.phieu_luong.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.phieu_luong.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.phieu_luong.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.phieu_luong.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.phieu_luong.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.phieu_luong.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.phieu_luong.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.phieu_luong.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.phieu_luong.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.phieu_luong.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.phieu_luong.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.phieu_luong.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.phieu_luong.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.phieu_luong.delb(req.body);
    return data;
  }

}

module.exports = PhieuLuongService;