const {
  BaseService
} = require('xc-core');

class PhieuDanhGiaService extends BaseService {

  constructor(app) {
    super(app);
    this.phieu_danh_gia = app.$dbs.primary.phieu_danh_gia;
  }

  async create(req, res) {
    let data = await this.phieu_danh_gia.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.phieu_danh_gia.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.phieu_danh_gia.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.phieu_danh_gia.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.phieu_danh_gia.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.phieu_danh_gia.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.phieu_danh_gia.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.phieu_danh_gia.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.phieu_danh_gia.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.phieu_danh_gia.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.phieu_danh_gia.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.phieu_danh_gia.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.phieu_danh_gia.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.phieu_danh_gia.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.phieu_danh_gia.delb(req.body);
    return data;
  }

}

module.exports = PhieuDanhGiaService;