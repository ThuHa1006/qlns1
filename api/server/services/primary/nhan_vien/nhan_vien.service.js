const {
  BaseService
} = require('xc-core');

class NhanVienService extends BaseService {

  constructor(app) {
    super(app);
    this.nhan_vien = app.$dbs.primary.nhan_vien;
  }

  async create(req, res) {
    let data = await this.nhan_vien.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.nhan_vien.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.nhan_vien.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.nhan_vien.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.nhan_vien.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.nhan_vien.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.nhan_vien.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.nhan_vien.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.nhan_vien.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.nhan_vien.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.nhan_vien.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.nhan_vien.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.nhan_vien.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.nhan_vien.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.nhan_vien.delb(req.body);
    return data;
  }

}

module.exports = NhanVienService;