const {
  BaseService
} = require('xc-core');

class NhomNguoiDungService extends BaseService {

  constructor(app) {
    super(app);
    this.nhom_nguoi_dung = app.$dbs.primary.nhom_nguoi_dung;
  }

  async create(req, res) {
    let data = await this.nhom_nguoi_dung.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.nhom_nguoi_dung.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.nhom_nguoi_dung.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.nhom_nguoi_dung.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.nhom_nguoi_dung.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.nhom_nguoi_dung.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.nhom_nguoi_dung.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.nhom_nguoi_dung.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.nhom_nguoi_dung.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.nhom_nguoi_dung.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.nhom_nguoi_dung.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.nhom_nguoi_dung.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.nhom_nguoi_dung.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.nhom_nguoi_dung.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.nhom_nguoi_dung.delb(req.body);
    return data;
  }

}

module.exports = NhomNguoiDungService;